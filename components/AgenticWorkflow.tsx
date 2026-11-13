'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Cog, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function AgenticWorkflow() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const agents = [
    {
      id: 1,
      name: 'Coordinator Agent',
      icon: Brain,
      description: 'Orchestrates workflow and delegates tasks',
      position: { x: 50, y: 10 },
      color: 'from-primary to-secondary',
    },
    {
      id: 2,
      name: 'Data Agent',
      icon: Database,
      description: 'Retrieves and processes information',
      position: { x: 15, y: 50 },
      color: 'from-secondary to-primary',
    },
    {
      id: 3,
      name: 'Analysis Agent',
      icon: Cog,
      description: 'Performs computations and analysis',
      position: { x: 50, y: 70 },
      color: 'from-primary to-accent',
    },
    {
      id: 4,
      name: 'Communication Agent',
      icon: MessageSquare,
      description: 'Handles responses and interactions',
      position: { x: 85, y: 50 },
      color: 'from-accent to-secondary',
    },
  ];

  const connections = [
    { from: 1, to: 2, delay: 0 },
    { from: 1, to: 3, delay: 0.3 },
    { from: 1, to: 4, delay: 0.6 },
    { from: 2, to: 3, delay: 0.9 },
    { from: 3, to: 4, delay: 1.2 },
  ];

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-background via-muted/20 to-background border border-border rounded-2xl overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {connections.map((conn, idx) => {
          const fromAgent = agents.find(a => a.id === conn.from);
          const toAgent = agents.find(a => a.id === conn.to);

          if (!fromAgent || !toAgent) return null;

          const x1 = `${fromAgent.position.x}%`;
          const y1 = `${fromAgent.position.y}%`;
          const x2 = `${toAgent.position.x}%`;
          const y2 = `${toAgent.position.y}%`;

          return (
            <g key={idx}>
              {/* Connection line */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                  duration: 1.5,
                  delay: conn.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />

              {/* Animated particle */}
              <motion.circle
                r="4"
                fill="#10b981"
                initial={{ offsetDistance: '0%', opacity: 0 }}
                animate={{
                  offsetDistance: '100%',
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: conn.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                style={{
                  offsetPath: `path('M ${x1} ${y1} L ${x2} ${y2}')`,
                }}
              >
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin={`${conn.delay}s`}
                >
                  <mpath xlinkHref={`#path-${idx}`} />
                </animateMotion>
              </motion.circle>

              <path
                id={`path-${idx}`}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                fill="none"
                stroke="none"
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Agent nodes */}
      <div className="relative w-full h-full" style={{ zIndex: 2 }}>
        {agents.map((agent, idx) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={agent.id}
              className="absolute"
              style={{
                left: `${agent.position.x}%`,
                top: `${agent.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setActiveNode(agent.id)}
              onHoverEnd={() => setActiveNode(null)}
            >
              <div className="relative">
                {/* Pulsing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${agent.color} opacity-30`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                  style={{ width: '80px', height: '80px', marginLeft: '-40px', marginTop: '-40px' }}
                />

                {/* Agent circle */}
                <motion.div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center cursor-pointer shadow-lg shadow-primary/30`}
                  animate={{
                    boxShadow: activeNode === agent.id
                      ? '0 0 30px rgba(16, 185, 129, 0.6)'
                      : '0 10px 30px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <Icon className="w-10 h-10 text-background" />

                  {/* Success indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.2 + 1.5 }}
                  >
                    <CheckCircle className="w-4 h-4 text-background" />
                  </motion.div>
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeNode === agent.id ? 1 : 0,
                    y: activeNode === agent.id ? 0 : 10,
                  }}
                  className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-muted/95 backdrop-blur border border-border rounded-lg p-4 w-64 pointer-events-none shadow-xl"
                  style={{ zIndex: 10 }}
                >
                  <h3 className="font-bold text-foreground mb-1">{agent.name}</h3>
                  <p className="text-sm text-foreground/70">{agent.description}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur border border-border rounded-lg p-4 z-10">
        <h3 className="font-semibold text-sm text-foreground mb-2">Autonomous Agent Collaboration</h3>
        <div className="flex items-center gap-2 text-xs text-foreground/70">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span>Agents communicate and coordinate in real-time</span>
        </div>
      </div>
    </div>
  );
}
