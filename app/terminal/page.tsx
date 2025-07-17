'use client'

import { useState, useEffect, useRef } from 'react'
import { sanitizeInput } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

interface Command {
  input: string
  output: string[]
  timestamp: Date
}

const AVAILABLE_COMMANDS = {
  help: [
    'Available commands:',
    '',
    'breathe          Enter meditative state',
    'echo [text]      Reflect your thoughts',
    'navigate         Show navigation paths',
    'reflect          Access reflection mode',
    'clear            Clear terminal',
    'help             Show this help',
    ''
  ],
  breathe: [
    'Consciousness stream initialized',
    'Mental state: Reflective',
    'Ocean depth: ∞',
    'Breathing pattern: Synchronized',
    ''
  ],
  navigate: [
    'Navigation paths:',
    '',
    '/ home           Return to ocean surface',
    '/genesis-log     Foundational thoughts',
    '/waves          Historical releases',
    '/compass        Symbol navigation',
    ''
  ],
  reflect: [
    'Entering reflection mode...',
    'What surfaces when you pause?',
    'What patterns do you notice?',
    'State: Reflective',
    ''
  ],
  clear: []
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Welcome message
    setCommands([{
      input: '',
      output: [
        'Welcome to ForkedOcean Mental Operating System',
        '',
        "Type 'help' for available commands",
        ''
      ],
      timestamp: new Date()
    }])
  }, [])

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [commands])

  useEffect(() => {
    // Scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    const input = sanitizeInput(currentInput.trim())
    const [command, ...args] = input.split(' ')
    
    let output: string[] = []

    if (command === 'clear') {
      setCommands([])
      setCurrentInput('')
      return
    }

    if (command === 'echo') {
      output = args.length > 0 ? [args.join(' '), ''] : ['']
    } else if (AVAILABLE_COMMANDS[command as keyof typeof AVAILABLE_COMMANDS]) {
      output = AVAILABLE_COMMANDS[command as keyof typeof AVAILABLE_COMMANDS]
    } else {
      output = [`zsh: command not found: ${command}`, '']
    }

    const newCommand: Command = {
      input,
      output,
      timestamp: new Date()
    }

    setCommands(prev => [...prev, newCommand])
    setCurrentInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      setCommands([])
    }
  }

  return (
    <div className="h-screen bg-ocean-primary text-ocean-accent font-mono text-sm">
      {/* Mac window controls */}
      <div className="bg-ocean-secondary h-7 flex items-center px-3 border-b border-ocean-accent/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-ocean-text-muted text-xs">Terminal</div>
        <button
          onClick={() => window.history.back()}
          className="text-ocean-text-muted hover:text-ocean-text-primary text-xs w-4 h-4 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="h-[calc(100vh-28px)] p-4 overflow-y-auto"
      >
        {/* Command history */}
        <div className="space-y-0">
          {commands.map((cmd, index) => (
            <div key={index}>
              {cmd.input && (
                <div className="flex">
                  <span className="text-ocean-text-primary">user@forkedocean</span>
                  <span className="text-ocean-text-primary mx-1">:</span>
                  <span className="text-ocean-accent">~</span>
                  <span className="text-ocean-text-primary mx-1">$</span>
                  <span className="text-ocean-text-primary">{cmd.input}</span>
                </div>
              )}
              {cmd.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-ocean-accent">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Current input line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-ocean-text-primary">user@forkedocean</span>
          <span className="text-ocean-text-primary mx-1">:</span>
          <span className="text-ocean-accent">~</span>
          <span className="text-ocean-text-primary mx-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-ocean-text-primary outline-none caret-ocean-text-primary ml-1"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  )
}