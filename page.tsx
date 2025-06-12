import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LEXGUBHome() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">LEXGUB PERÚ</h1>
        <p className="text-lg text-gray-600 mt-2">
          Plataforma de Asistencia Técnico-Normativa en Control Gubernamental
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "LexContrata", desc: "Contrataciones del Estado" },
          { title: "LexControl", desc: "Auditoría y control gubernamental" },
          { title: "LexPAD", desc: "Procedimientos disciplinarios PAS" },
          { title: "LexEmpleo", desc: "Empleo público y régimen disciplinario" },
          { title: "LexPenal", desc: "Delitos contra la función pública" },
          { title: "LexIngenia", desc: "Control de obras públicas" },
        ].map((module, index) => (
          <Card key={index} className="rounded-2xl shadow-md p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{module.desc}</p>
              <Button variant="outline">Ingresar</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Consulta normativa</h2>
        <div className="flex gap-4">
          <Input placeholder="Ej. responsabilidad funcional, OSCE, artículo 8..." className="flex-1" />
          <Button>Buscar</Button>
        </div>
      </div>
    </div>
  );
}