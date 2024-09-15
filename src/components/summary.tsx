import { CheckCircle2, Plus } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon.tsx'
import { Button } from './ui/button.tsx'
import { DialogTrigger } from './ui/dialog.tsx'
import { OutlineButton } from './ui/outline-button.tsx'
import { Progress, ProgressIndicator } from './ui/progress-bar.tsx'
import { Separator } from './ui/separator.tsx'

export const Summary = () => {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Estudar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Correr
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Cozinhar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Ler
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Domingo{' '}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar cedo</span>" às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Segunda{' '}
              <span className="text-zinc-400 text-xs">(11 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "<span className="text-zinc-100">Meditar</span>
                  " às <span className="text-zinc-100">17:27h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
