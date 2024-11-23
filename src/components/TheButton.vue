<script setup lang="ts">
import Button from 'primevue/button';

interface ButtonProps {
    label?: string
    icon?: string
    iconPosition?: 'right' | 'top' | 'bottom'
    isLoading?: boolean
    disable?: boolean
    variant?: "outlined" | "text" | "link"
}
const props = defineProps<ButtonProps>()
</script>
<template>
<Button :label="props.label" :icon="props.icon" :iconPos="props.iconPosition" :loading="props.isLoading" :disabled="props.disable" :variant="props.variant"/>
</template>