<script>
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  import Card from '../ui/Card.svelte';

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    areaOfInterest: '',
    transferDiploma: ''
  };

  let errors = {};

  const areaOptions = [
    { value: '', label: 'Select an option' },
    { value: 'undergraduate', label: 'Apply for an undergraduate program' },
    { value: 'graduate', label: 'Apply for a graduate program' },
    { value: 'credit', label: 'Take an undergraduate credit course' },
    { value: 'transfer', label: 'Take a credit course to transfer credit back to my university' },
    { value: 'noncredit', label: 'Take a non-credit course for professional development' }
  ];

  function validateForm() {
    errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.areaOfInterest) errors.areaOfInterest = 'Please select an area of interest';
    
    return Object.keys(errors).length === 0;
  }

  function handleSubmit() {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  }
</script>

<section class="py-4 bg-gray-50" id="course-form">
  <div class="container mx-auto px-4 lg:px-8">
    <div class="max-w-md mx-auto">
      <Card>
        <h4 class="text-xl font-bold text-gray-900 mb-6">Start Online Course</h4>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <Input
            id="firstName"
            label="First name"
            required
            bind:value={formData.firstName}
            error={errors.firstName}
            placeholder="John"
          />
          
          <Input
            id="lastName"
            label="Last name"
            required
            bind:value={formData.lastName}
            error={errors.lastName}
            placeholder="Doe"
          />
          
          <Input
            id="email"
            type="email"
            label="Email"
            required
            bind:value={formData.email}
            error={errors.email}
            placeholder="john.doe@gmail.com"
          />
          
          <div class="space-y-1">
            <label for="areaOfInterest" class="block text-sm font-medium text-gray-700">
              Area of Interest <span class="text-red-500">*</span>
            </label>
            <select 
              id="areaOfInterest"
              bind:value={formData.areaOfInterest}
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-au-blue focus:border-transparent"
              class:border-red-500={errors.areaOfInterest}
            >
              {#each areaOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
            {#if errors.areaOfInterest}
              <p class="text-sm text-red-600">{errors.areaOfInterest}</p>
            {/if}
          </div>

                   
          <div class="space-y-3">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="block text-sm font-medium text-gray-700">
              Do you plan to transfer a diploma or certificate from another Canadian post-secondary institution?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input 
                  type="radio" 
                  name="transferDiploma" 
                  value="yes"
                  bind:group={formData.transferDiploma}
                  class="mr-2"
                />
                Yes
              </label>
              <label class="flex items-center">
                <input 
                  type="radio" 
                  name="transferDiploma" 
                  value="no"
                  bind:group={formData.transferDiploma}
                  class="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div class="pt-4">
            <Button type="submit" fullWidth>
              Get Started
            </Button>
          </div>
          
          <p class="text-xs text-gray-500">
            You are advised that the information you provide, and any other information placed into your student record, will be used in compliance with Alberta's Protection of Privacy Act (POPA) and Access to Information Act (ATIA).
          </p>
          
          <p class="text-xs text-gray-500">
            For more information, please refer to our website accessing information.
          </p>
          
          <label class="flex items-center text-xs text-gray-500">
            <input type="checkbox" class="mr-2" />
            I understand
          </label>
        </form>
      </Card>
    </div>
  </div>
</section>