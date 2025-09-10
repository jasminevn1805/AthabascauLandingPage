<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import CourseForm from '$lib/components/forms/CourseForm.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	let newsletterEmail = '';
	let mobileMenuOpen = false;

	function handleNewsletterSubmit() {
		console.log('Newsletter signup:', newsletterEmail);
		// Handle newsletter signup
		newsletterEmail = '';
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<!-- <svelte:head>
	<title>Athabasca University - Flexible Online Learning</title>
	<meta name="description" content="Open your options with a more flexible schedule. Take online courses at your own pace with Athabasca University." />
</svelte:head> -->

<!-- Header -->
<header class="bg-white shadow-sm">
	<div class="container mx-auto px-4 lg:px-8 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
        <a href="https://www.athabascau.ca" class="flex items-center">
          <img src="/athabasca_logo_horizontal_rgb_colour.png.webp" alt="Athabasca University Logo" class="h-8 mr-3" />
        </a>
      </div>
			
			<nav class="hidden md:flex space-x-6">
				<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Courses</a>
				<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Programs</a>
				<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>
				<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
			</nav>
			
			<!-- Mobile menu button -->
			<button class="md:hidden" on:click={toggleMobileMenu} aria-label="Toggle navigation menu">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
						d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
				</svg>
			</button>
		</div>
		
		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<nav class="md:hidden mt-4 pb-4 border-t border-gray-200">
				<div class="flex flex-col space-y-3 pt-4">
					<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Courses</a>
					<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Programs</a>
					<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>
					<a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
				</div>
			</nav>
		{/if}
	</div>
</header>

<main>
	<Hero />

  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-12 items-start">

        <!--Col 1: Feature and Testimonials (2/3 width)-->
        <div class="xl:col-span-2 space-y-12 order-1">
          <!--Feature Section-->
          <div>
            <Features />
          </div>
                  
        </div>

        <!-- Col 2: Form (1/3 width) -->
        <div class="xl:col-span-1 order-2 xl:order-2">
          <div class="bg-gray-50 p-6 md:p-8 rounded-lg xl:sticky xl:top-8">
            <div class="text-center mb-6 lg:mb-8">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 mt-4">
                Ready to Start Your Journey?
              </h2>
              <p class="text-gray-600 text-sm md:text-base">
                Fill out the form below to get information about our courses and programs.
              </p>
            </div>
            
            <div class="mb-4">
              <CourseForm />
            </div>
          </div>
        </div>
        

      </div>
    </div>
  </section>
	
	
	<!-- Testimonials Section -->
<section class="py-16 bg-white">
		<div class="container mx-auto px-4 lg:px-8">
			<h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
				What People Say About Online Courses At AU
			</h2>
      
			
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Testimonial 1 -->
				<div class="bg-gray-50 rounded-xl p-6 flex flex-col justify-end">
					<p class="text-gray-600 mb-6">
						"The courses are designed to be inclusive, flexible, supported, and connected. AU provides excellent resources and faculty support that made my learning journey successful."
					</p>
					<div class="flex items-center">
						<img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Portrait" class="w-10 h-10 rounded-full object-cover mr-3"/>
						<div>
							<p class="font-semibold text-gray-900">Sarah Mitchell</p>
							<p class="text-sm text-gray-500">Business Administration Graduate</p>
						</div>
					</div>
				</div>
        
				
				<!-- Testimonial 2 -->
				<div class="bg-gray-50 rounded-xl p-6 flex flex-col justify-end">
					<p class="text-gray-600 mb-6">
						"The flexibility of online learning at AU allowed me to balance work, family, and education. The quality of education is outstanding and truly accessible."
					</p>
					<div class="flex items-center">
						<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Portrait" class="w-10 h-10 rounded-full object-cover mr-3"/>
						<div>
							<p class="font-semibold text-gray-900">Michael Chen</p>
							<p class="text-sm text-gray-500">Computer Science Student</p>
						</div>
					</div>
				</div>
				
				<!-- Testimonial 3 -->
				<div class="bg-gray-50 rounded-xl p-6 flex flex-col justify-end">
					<p class="text-gray-600 mb-6">
						"Studying with AU has been an incredibly rewarding experience. The online courses are thoughtfully designed to be flexible, so I can learn at my own pace while still feeling supported every step of the way. The instructors are approachable, the resources are practical, and the community of learners makes me feel connected even from a distance."
					</p>
					<div class="flex items-center">
						<img src="https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Portrait" class="w-10 h-10 rounded-full object-cover mr-3"/>
						<div>
							<p class="font-semibold text-gray-900">Jennifer Adams</p>
							<p class="text-sm text-gray-500">Psychology Graduate</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  

  
  <!--Instruction Section-->
  <section class="py-4 md:py-6 lg:py-8 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="bg-au-blue text-white p-6 md:p-12 lg:p-16 rounded-xl  mx-auto ">
        <div class="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-20 items-start">

          <!--Col 1: Main Content-->
          <div class="space-y-2 lg:space-y-4">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">Getting started is simple</h1>
            <p class="text-white text-sm md:text-base lg:text-base leading-relaxed">Start learning in minutes. With anytime access, practical exercises, and expert support, our platform turns your goals into achievements. Learning has never been this easy—or this rewarding.</p>
            <div class="pt-2">
              <Button size="lg" variant="tertiary-mono" class="w-full sm:w-auto">Get Started</Button>
            </div>
          </div>

          <!--Col 2: Steps-->
          <div class="space-y-8 lg:space-y-16">
            <!--Step1-->
            <div class="flex items-start space-x-4 lg:space-x-6">
              <div class="bg-blue-700 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0 transition-transform">1</div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Find What Pique's Your Interest</h3>
                <p class="text-white text-sm md:text-base lg:text-base leading-relaxed">Choose from 50+ live, online courses.</p>
              </div>
            </div>
            
            <!--Step2-->
            <div class="flex items-start space-x-4 lg:space-x-6">
              <div class="bg-blue-700 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0 transition-transform">2</div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Sign Up</h3>
                <p class="text-white text-sm md:text-base lg:text-base leading-relaxed">Sign up online in minutes—no complicated paperwork.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  

  	<!-- Statistics Section -->
	<section class="py-32 bg-white">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
				<div>
					<div class="text-6xl font-bold text-gray-900 mb-4">94%+</div>
					<p class="mt-3 text-gray-900 max-w-xs mx-auto">of our alumni are satisfied with the quality of their AU education </p>
				</div>

				<div>
					<div class="text-6xl font-bold text-gray-900 mb-4">92%</div>
					<p class="mt-3 text-gray-900 max-w-xs mx-auto">of AU alumni say they are in a job related to their field of study </p>
				</div>
				<div>
					<div class="text-6xl font-bold text-gray-900 mb-4">+50k</div>
					<p class="mt-3 text-gray-900 max-w-xs mx-auto">program and course alumni from over 100 countries.</p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Newsletter Section -->
	<section class="py-16 bg-gray-50 text-gray-900">
		<div class="container mx-auto px-4 lg:px-8 text-center">
			<h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
			<p class="text-gray-600 mb-8 max-w-2xl mx-auto">
				Get the latest news about courses, programs, and opportunities at Athabasca University delivered to your inbox.
			</p>
			
			<form on:submit|preventDefault={handleNewsletterSubmit} class="max-w-md mx-auto flex gap-4 justify-center">
				<Input 
					type="email" 
					placeholder="Enter your email address"
					bind:value={newsletterEmail}
					required
					class="flex-1"
				/>
				<Button type="submit" variant="negative-primary">
					Subscribe
				</Button>
			</form>
		</div>
	</section>
	

  
</main>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="grid md:grid-cols-4 gap-8">
			<!-- Company Info -->
			<div>
				<div class="flex items-center mb-4">
					<div class="bg-au-orange w-8 h-8 rounded mr-3"></div>
					<span class="text-lg font-semibold">Athabasca University</span>
				</div>
				<p class="text-gray-400 text-sm">
					Canada's Open University, providing accessible, flexible, and innovative education to students worldwide.
				</p>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h3 class="font-semibold mb-4">Quick Links</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">About AU</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Academic Calendar</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Student Support</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Library</a></li>
				</ul>
			</div>
			
			<!-- Programs -->
			<div>
				<h3 class="font-semibold mb-4">Programs</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Undergraduate</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Graduate</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Professional</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Continuing Education</a></li>
				</ul>
			</div>
			
			<!-- Contact -->
			<div>
				<h3 class="font-semibold mb-4">Contact</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li>1 University Drive</li>
					<li>Athabasca, AB T9S 3A3</li>
					<li>Canada</li>
					<li class="pt-2">
						<a href="tel:1-800-788-9041" class="hover:text-white transition-colors">1-800-788-9041</a>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p class="text-gray-400 text-sm">
				© 2024 Athabasca University. All rights reserved.
			</p>
			<div class="flex space-x-6 mt-4 md:mt-0">
				<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
				<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
				<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
			</div>
		</div>
	</div>
</footer>