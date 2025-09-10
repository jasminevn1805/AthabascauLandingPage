<script>
  import Button from "../ui/Button.svelte";
  const features = [
    {
      title: "Flexible, accessible, and personalized",
      description: "Take one course at a time or a few! Our flexible delivery understands that work, family and education is a balancing act. We accommodate all life circumstances. Find a course or program that works for you."
    }
  ];
</script>

<section class="py-8 lg:py-12 bg-white">
  <div class="container mx-auto">
    <div class="max-w-4xl">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
        Flexible, accessible, and personalized
      </h2>
      
      <p class="text-lg text-gray-600 mb-12 max-w-3xl">
        Take one course at a time or a few! Our flexible delivery understands that work, family and education is a balancing act. We accommodate all life circumstances. Find a course or program that works for you.
      </p>

      <!-- Why Online Courses -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Why Online Courses</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Study at your own pace</h4>
              <p class="text-gray-600">in one or as many courses as you like</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Engage in your course materials</h4>
              <p class="text-gray-600">at any time of day or night, whatever schedule works best for you</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Take up to six months</h4>
              <p class="text-gray-600">to complete a course. And if you need an extension, no problem!</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Non-continuous learning</h4>
              <p class="text-gray-600">is okay! AU meets the needs of the demands your life puts upon you.</p>
            </div>
          </div>
          
        </div>

        <div class="mt-8 flex justify-start"><Button size="lg" variant="primary">Learn More</Button></div>
        
      </div>

      <!-- Who Should Attend -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Who Should Attend</h3>
        <p class="text-lg text-gray-600">
          Our courses are for ambitious learners of all backgrounds—students, professionals, career switchers, or lifelong learners—anyone who wants to gain relevant, real-world skills. No matter your experience level, we have courses that fit your needs.
        </p>
      </div>
      
      <!-- Who Should Attend -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-8">When To Start</h3>
        <p class="text-lg text-gray-600">
          Courses are available year-round, with new sessions starting every month. You can enroll anytime and access the content on-demand, giving you full control over your learning schedule.
        </p>
      </div>
    </div>
  </div>
</section>