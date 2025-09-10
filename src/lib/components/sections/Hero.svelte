<script>
  import Button from '../ui/Button.svelte';
</script>


<!--Hero section-->
<section class="relative h-screen min-h-[500px] max-h-[600px] flex items-center justify-center">
  
  <!--Background image-->
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80');">
    
    <!--Dark overlay-->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!--Content-->
    <div class="container mx-auto px-4 lg:px-8 h-full flex items-center">
      <div class="relative z-10 text-left text-white max-w-4xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Open Your Options with Flexible Learning
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
          Take online courses at your own pace with Athabasca University. 
          Canada's Open University offers accessible, quality education designed for your lifestyle.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="tertiary-mono">
            Explore Courses
          </Button>
          <Button size="lg" variant="outline-mono">
            Learn More
          </Button>
        </div>
      </div>
    </div>
    
  </div>
</section>
