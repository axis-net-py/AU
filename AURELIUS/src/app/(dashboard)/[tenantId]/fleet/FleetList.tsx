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
import { Plus, Trash2, Truck, Wrench, Loader2 } from "lucide-react";
import { createMachinery, deleteMachinery } from "@/app/actions/fleet";
import { toast } from "sonner";

interface Machinery {
  id: string;
  name: string;
  type: string | null;
  brand: string | null;
  model: string | null;
  year: number | null;
  currentHours: any | null;
}

export function FleetList({ initialMachinery, tenantId }: { initialMachinery: Machinery[]; tenantId: string }) {
  const [machinery, setMachinery] = useState<Machinery[]>(initialMachinery);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("Trator");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [hours, setHours] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    if (!name) {
      toast.error("Nome do maquinário é obrigatório");
      return;
    }

    startTransition(async () => {
      try {
        const yearVal = year ? parseInt(year) : undefined;
        const hoursVal = hours ? parseFloat(hours) : undefined;

        const newMachine = await createMachinery(tenantId, {
          name,
          type,
          brand: brand || undefined,
          model: model || undefined,
          year: yearVal,
          currentHours: hoursVal,
        });

        // @ts-ignore
        setMachinery((prev) => [newMachine, ...prev]);
        toast.success(`Maquinário "${name}" cadastrado com sucesso!`);
        setName("");
        setBrand("");
        setModel("");
        setYear("");
        setHours("");
        setIsOpen(false);
      } catch (err: any) {
        toast.error(err.message || "Erro ao adicionar maquinário");
      }
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (!confirm(`Deseja realmente deletar a máquina "${name}"?`)) return;

    startTransition(async () => {
      try {
        await deleteMachinery(tenantId, id);
        setMachinery((prev) => prev.filter((m) => m.id !== id));
        toast.success(`Maquinário "${name}" deletado.`);
      } catch (err: any) {
        toast.error(err.message || "Erro ao deletar maquinário");
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
              <Plus className="h-4 w-4" /> Novo Maquinário
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px] bg-card border border-border p-0 overflow-hidden rounded-lg shadow-lg">
            <DialogHeader className="text-left space-y-1 p-6 border-b border-border bg-muted/30">
              <DialogTitle className="text-[18px] font-bold tracking-tight text-foreground">
                Cadastrar Novo Maquinário
              </DialogTitle>
              <DialogDescription className="text-[12px] text-muted-foreground font-medium">
                Insira as informações técnicas da máquina para telemetria e controle de manutenção.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[11px] text-primary uppercase tracking-widest font-bold">Nome / Identificador</Label>
                <Input
                  id="name"
                  placeholder="Ex: Trator John Deere 6115J"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-[11px] text-primary uppercase tracking-widest font-bold">Tipo</Label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-lg bg-background border border-border text-foreground px-3 py-2 text-[13px] h-[40px] outline-none shadow-sm focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="Trator">Trator</option>
                    <option value="Colheitadeira">Colheitadeira</option>
                    <option value="Pulverizador">Pulverizador</option>
                    <option value="Semeadora">Semeadora</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours" className="text-[11px] text-primary uppercase tracking-widest font-bold">Horas / Km Atual</Label>
                  <Input
                    id="hours"
                    type="number"
                    placeholder="Ex: 1200"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="brand" className="text-[11px] text-primary uppercase tracking-widest font-bold">Marca</Label>
                  <Input
                    id="brand"
                    placeholder="Ex: John Deere"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model" className="text-[11px] text-primary uppercase tracking-widest font-bold">Modelo</Label>
                  <Input
                    id="model"
                    placeholder="Ex: 6115J"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-background border-border text-[13px] h-[40px] rounded-lg font-medium shadow-sm focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-[11px] text-primary uppercase tracking-widest font-bold">Ano de Fabricação</Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="Ex: 2021"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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

      {/* Fleet Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Máquina</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Tipo</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Marca / Modelo</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Ano</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Horímetro</TableHead>
              <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {machinery.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                  Nenhum maquinário cadastrado ainda. Clique em "Novo Maquinário" para adicionar.
                </TableCell>
              </TableRow>
            ) : (
              machinery.map((machine) => (
                <TableRow key={machine.id} className="hover:bg-muted/30 border-b border-border transition-colors">
                  <TableCell className="font-medium flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary shrink-0" />
                    {machine.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full">
                      {machine.type || "Trator"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {machine.brand && machine.model
                      ? `${machine.brand} ${machine.model}`
                      : machine.brand || machine.model || "-"}
                  </TableCell>
                  <TableCell>{machine.year || "-"}</TableCell>
                  <TableCell className="font-mono">
                    {machine.currentHours ? `${Number(machine.currentHours).toFixed(0)} h` : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(machine.id, machine.name)}
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
