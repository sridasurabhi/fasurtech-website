'use client';

import { useState } from 'react';
import { Brain, Database, Cog, MessageSquare } from 'lucide-react';

const W = 600;
const H = 400;

const agents = [
  { id: 1, name: 'Coordinator Agent', icon: Brain, description: 'Breaks a goal into tasks and delegates them', x: 50, y: 16, lead: true },
  { id: 2, name: 'Data Agent', icon: Database, description: 'Retrieves and prepares information', x: 14, y: 56 },
  { id: 3, name: 'Analysis Agent', icon: Cog, description: 'Runs computations and analysis', x: 50, y: 80 },
  { id: 4, name: 'Communication Agent', icon: MessageSquare, description: 'Handles responses and interactions', x: 86, y: 56 },
];

const connections: [number, number][] = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [3, 4],
];

const pt = (id: number) => {
  const a = agents.find((n) => n.id === id)!;
  return { x: (a.x / 100) * W, y: (a.y / 100) * H };
};

export default function AgenticWorkflow() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden border border-border bg-white"
      role="group"
      aria-label="Diagram of four AI agents coordinating a workflow"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, #eef1f6 1px, transparent 1px), linear-gradient(to bottom, #eef1f6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        {connections.map(([from, to], i) => {
          const a = pt(from);
          const b = pt(to);
          const lit = active === from || active === to;
          return (
            <g key={i}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={lit ? '#d81a21' : '#b8c0cf'}
                strokeWidth={lit ? 2 : 1.5}
                strokeDasharray="5 5"
                style={{ transition: 'stroke 0.2s' }}
              />
              <circle r="4" fill="#d81a21">
                <animate attributeName="cx" values={`${a.x};${b.x}`} dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                <animate attributeName="cy" values={`${a.y};${b.y}`} dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {agents.map((agent) => {
        const Icon = agent.icon;
        const isActive = active === agent.id;
        return (
          <div
            key={agent.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${agent.x}%`, top: `${agent.y}%`, zIndex: isActive ? 20 : 10 }}
            onMouseEnter={() => setActive(agent.id)}
            onMouseLeave={() => setActive(null)}
          >
            <button
              type="button"
              aria-label={`${agent.name}: ${agent.description}`}
              onFocus={() => setActive(agent.id)}
              onBlur={() => setActive(null)}
              className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md transition-all sm:h-[72px] sm:w-[72px] ${
                agent.lead || isActive ? 'bg-primary' : 'bg-footer'
              } ${isActive ? 'scale-110 shadow-xl' : ''}`}
            >
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
            </button>
            <p className="mt-2 hidden text-center text-xs font-semibold text-foreground sm:block">{agent.name}</p>
            <div
              role="tooltip"
              className={`pointer-events-none absolute left-1/2 top-full z-30 mt-10 w-52 -translate-x-1/2 border border-border border-t-2 border-t-primary bg-white p-3 shadow-lg transition-opacity sm:mt-12 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-sm font-semibold text-foreground">{agent.name}</p>
              <p className="mt-0.5 text-xs text-slate-600">{agent.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
