<script>
  export let variant = 'primary';
  export let size = 'md';
  export let disabled = false;
  export let type = 'button';
  export let fullWidth = false;

  $: classes = `
    inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
    ${getVariantClasses(variant)}
    ${getSizeClasses(size)}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `.trim();

  function getVariantClasses(variant) {
    switch (variant) {
      case 'primary':
        return 'bg-au-blue text-white hover:bg-blue-700 focus:ring-au-blue';
      case 'secondary':
        return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';
      case 'outline':
        return 'border-2 border-au-blue text-au-blue hover:bg-au-blue hover:text-white focus:ring-au-blue';
      case 'tertiary-mono':
        return 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100';
      case 'outline-mono':
        return 'border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white';
      case 'negative-primary':
        return 'bg-au-orange text-white hover:bg-orange-700 focus:ring-au-orange-100';
      default:
        return 'bg-au-blue text-white hover:bg-blue-700 focus:ring-au-blue';
    }
  }

  function getSizeClasses(size) {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  }
</script>

<button
  {type}
  {disabled}
  class={classes}
  on:click
>
  <slot />
</button>