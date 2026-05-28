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
import { Plus, Trash2, MapPin, Compass, Loader2 } from "lucide-react";
import { createField, deleteField } from "@/app/actions/fields";
import { toast } from "sonner";

interface Field {
  id: string;
  name: string;
  areaHectares: any;
  soilType: string | null;
  status: string;
  createdAt: Date;
}

export function FieldList({ initialFields, tenantId }: { initialFields: Field[]; tenantId: string }) {
  const [fields, setFields] = useState<Field[]>(initialFields);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [soilType, setSoilType] = useState("Argiloso");
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    if (!name || !area) {
      toast.error("Preencha o nome e a área do talhão");
      return;
    }

    startTransition(async () => {
      try {
        const areaVal = parseFloat(area);
        if (isNaN(areaVal) || areaVal <= 0) {
          toast.error("Área deve ser um número positivo");
          return;
        }

        const newField = await createField(tenantId, {
          name,
          areaHectares: areaVal,
          soilType,
        });

        // @ts-ignore
        setFields((prev) => [newField, ...prev]);
        toast.success(`Talhão "${name}" adicionado com sucesso!`);
        setName("");
        setArea("");
        setIsOpen(false);
      } catch (err: any) {
        toast.error(err.message || "Erro ao adicionar talhão");
      }
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (!confirm(`Deseja realmente deletar o talhão "${name}"?`)) return;

    startTransition(async () => {
      try {
        await deleteField(tenantId, id);
        setFields((prev) => prev.filter((f) => f.id !== id));
        toast.success(`Talhão "${name}" removido.`);
      } catch (err: any) {
        toast.error(err.message || "Erro ao deletar talhão");
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
              <Plus className="h-4 w-4" /> Novo Talhão
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-card border border-border p-0 overflow-hidden rounded-lg shadow-lg">
            <DialogHeader className="text-left space-y-1 p-6 border-b border-border bg-muted/30">
              <DialogTitle className="text-[18px] font-bold tracking-tight text-foreground">
                Adicionar Novo Talhão
              </DialogTitle>
              <DialogDescription className="text-[12px] text-muted-foreground font-medium">
                Cadastre um talhão/área da fazenda especificando as dimensões.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[11px] text-primary uppercase tracking-widest font-bold">Nome do Talhão</Label>
                <Input
                  id="name"
                  placeholder="Ex: Talhão Norte"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area" className="text-[11px] text-primary uppercase tracking-widest font-bold">Área em Hectares (ha)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Ex: 150"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilType" className="text-[11px] text-primary uppercase tracking-widest font-bold">Tipo de Solo</Label>
                <select
                  id="soilType"
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full rounded-lg bg-background border border-border text-foreground px-3 py-2 text-[13px] h-[40px] outline-none shadow-sm focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Argiloso">Argiloso</option>
                  <option value="Arenoso">Arenoso</option>
                  <option value="Misto">Misto</option>
                  <option value="Humoso">Humoso</option>
                </select>
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

      {/* Fields Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Nome do Talhão</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Área (ha)</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Tipo de Solo</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Status</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Nenhum talhão cadastrado ainda. Clique em "Novo Talhão" para adicionar.
                </TableCell>
              </TableRow>
            ) : (
              fields.map((field) => (
                <TableRow key={field.id} className="hover:bg-muted/30 border-b border-border transition-colors">
                  <TableCell className="font-medium flex items-center gap-2">
                    <Compass className="h-4 w-4 text-primary shrink-0" />
                    {field.name}
                  </TableCell>
                  <TableCell className="font-mono">{Number(field.areaHectares).toFixed(1)} ha</TableCell>
                  <TableCell>{field.soilType || "Argiloso"}</TableCell>
                  <TableCell>
                    <Badge variant={field.status === "active" ? "default" : "secondary"} className="rounded-full">
                      {field.status === "active" ? "Ativo" : "Inativo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(field.id, field.name)}
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
