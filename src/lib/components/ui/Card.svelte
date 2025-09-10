<script>
  export let padding = 'md'; // sm, md, lg
  export let shadow = false;
  export let border = false;

  $: classes = `
    bg-white rounded-lg
    ${getPaddingClasses(padding)}
    ${shadow ? 'shadow-lg' : ''}
    ${border ? 'border border-gray-200' : ''}
  `.trim();

  function getPaddingClasses(padding) {
    switch (padding) {
      case 'sm':
        return 'p-4';
      case 'md':
        return 'p-6';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  }
</script>

<div class={classes}>
  <slot />
</div>