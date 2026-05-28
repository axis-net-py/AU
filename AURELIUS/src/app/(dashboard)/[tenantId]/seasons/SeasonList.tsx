"use client";

import React, { useState, useTransition } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Plus, Trash2, Sprout, Calendar, Loader2 } from "lucide-react";
import { createSeason, deleteSeason } from "@/app/actions/seasons";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Season {
  id: string;
  name: string;
  crop: string;
  startDate: Date;
  endDate: Date | null;
  status: string;
}

export function SeasonList({ initialSeasons, tenantId }: { initialSeasons: Season[]; tenantId: string }) {
  const [seasons, setSeasons] = useState<Season[]>(initialSeasons);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [crop, setCrop] = useState("Soja");
  const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    if (!name || !crop || !startDate) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    startTransition(async () => {
      try {
        const newSeason = await createSeason(tenantId, {
          name,
          crop,
          startDate,
          endDate: endDate || undefined,
        });

        // @ts-ignore
        setSeasons((prev) => [newSeason, ...prev]);
        toast.success(`Safra "${name}" adicionada com sucesso!`);
        setName("");
        setEndDate("");
        setIsOpen(false);
      } catch (err: any) {
        toast.error(err.message || "Erro ao adicionar safra");
      }
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (!confirm(`Deseja realmente deletar a safra "${name}"?`)) return;

    startTransition(async () => {
      try {
        await deleteSeason(tenantId, id);
        setSeasons((prev) => prev.filter((s) => s.id !== id));
        toast.success(`Safra "${name}" deletada.`);
      } catch (err: any) {
        toast.error(err.message || "Erro ao deletar safra");
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Action Header */}
      <div className="flex justify-between items-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="axis-btn-primary h-[32px] px-4 text-[13px] rounded-lg shadow-sm flex items-center gap-2">
              <Plus className="h-4 w-4" /> Nova Safra
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-card border border-border p-0 overflow-hidden rounded-lg shadow-lg">
            <DialogHeader className="text-left space-y-1 p-6 border-b border-border bg-muted/30">
              <DialogTitle className="text-[18px] font-bold tracking-tight text-foreground">
                Adicionar Nova Safra
              </DialogTitle>
              <DialogDescription className="text-[12px] text-muted-foreground font-medium">
                Cadastre um novo ciclo de cultivo para monitorar custos e colheita.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[11px] text-primary uppercase tracking-widest font-bold">Nome da Safra</Label>
                <Input
                  id="name"
                  placeholder="Ex: Safra de Soja 2026"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crop" className="text-[11px] text-primary uppercase tracking-widest font-bold">Cultura</Label>
                <select
                  id="crop"
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  className="w-full rounded-lg bg-background border border-border text-foreground px-3 py-2 text-[13px] h-[40px] outline-none shadow-sm focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Soja">Soja</option>
                  <option value="Milho">Milho</option>
                  <option value="Trigo">Trigo</option>
                  <option value="Algodão">Algodão</option>
                  <option value="Sorgo">Sorgo</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate" className="text-[11px] text-primary uppercase tracking-widest font-bold">Data de Início</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate" className="text-[11px] text-primary uppercase tracking-widest font-bold">Data de Fim (Opcional)</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={handleAdd}
                  disabled={isPending}
                  className="bg-primary text-primary-foreground px-6 h-[40px] rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-[14px] font-bold disabled:opacity-50 shadow-md active:scale-95 flex-1"
                >
                  {isPending ? <Loader2 className="h-4 w-4 animate-spin text-secondary" /> : "Salvar"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 h-[40px] rounded-lg text-[14px] font-semibold text-muted-foreground hover:bg-muted transition-all border border-border flex-1"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Seasons Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Nome da Safra</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Cultura</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Data Início</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Data Fim</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Status</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {seasons.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                  Nenhuma safra registrada ainda. Clique em "Nova Safra" para adicionar.
                </TableCell>
              </TableRow>
            ) : (
              seasons.map((season) => (
                <TableRow key={season.id} className="hover:bg-muted/30 border-b border-border transition-colors">
                  <TableCell className="font-medium flex items-center gap-2">
                    <Sprout className="h-4 w-4 text-primary shrink-0" />
                    {season.name}
                  </TableCell>
                  <TableCell>{season.crop}</TableCell>
                  <TableCell className="font-mono">
                    {format(new Date(season.startDate), "dd/MM/yyyy", { locale: ptBR })}
                  </TableCell>
                  <TableCell className="font-mono">
                    {season.endDate
                      ? format(new Date(season.endDate), "dd/MM/yyyy", { locale: ptBR })
                      : "Em andamento"}
                  </TableCell>
                  <TableCell>
                    <Badge variant={season.status === "active" ? "default" : "secondary"} className="rounded-full">
                      {season.status === "active" ? "Ativa" : "Concluída"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(season.id, season.name)}
                        className="h-8 w-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-full"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
