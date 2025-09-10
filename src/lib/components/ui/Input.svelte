<script>
  export let type = 'text';
  export let placeholder = '';
  export let value = '';
  export let label = '';
  export let required = false;
  export let error = '';
  export let disabled = false;
  export let id = '';

  $: inputClasses = `
    w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-au-blue focus:border-transparent
    ${error ? 'border-red-500' : 'border-gray-300'}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
  `.trim();
</script>

<div class="space-y-1">
  {#if label}
    <label for={id} class="block text-sm font-medium text-gray-700">
      {label}
      {#if required}
        <span class="text-red-500">*</span>
      {/if}
    </label>
  {/if}
  
  <input
    {id}
    {type}
    {placeholder}
    {required}
    {disabled}
    bind:value
    class={inputClasses}
    on:input
    on:blur
    on:focus
  />
  
  {#if error}
    <p class="text-sm text-red-600">{error}</p>
  {/if}
</div>