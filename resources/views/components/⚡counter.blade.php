<?php

use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component
{
    public int $count = 0;

    public function increment(): void
    {
        $this->count++;
    }

    public function decrement(): void
    {
        $this->count--;
    }
};
?>

<div class="flex flex-col items-center gap-4 p-6 bg-white dark:bg-[#161615] rounded-lg shadow">
    <h2 class="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">Livewire Counter</h2>

    <div class="flex items-center gap-4">
        <button
            wire:click="decrement"
            class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
            -
        </button>

        <span class="text-2xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">{{ $count }}</span>

        <button
            wire:click="increment"
            class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
            +
        </button>
    </div>
</div>