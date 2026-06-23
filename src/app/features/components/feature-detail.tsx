import React from "react";
import { Check, Shield, Cpu, RefreshCw } from "lucide-react";

interface FeatureCardProps {
  title: string;
  desc: string;
  points: string[];
}

export default function FeatureDetail({ title, desc, points }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
          <Cpu className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
      </div>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{desc}</p>
      <ul className="space-y-3">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
