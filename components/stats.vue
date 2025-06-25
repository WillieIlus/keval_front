<template>
  <section ref="statsSection" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Years of Experience -->
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-persian-green-600 mb-2">
            {{ animatedStats.experience }}
          </div>
          <div class="text-lg text-gray-600 font-medium">
            Years of Experience
          </div>
        </div>

        <!-- Companies Trusting Us -->
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-persian-green-600 mb-2">
            {{ formatNumber(animatedStats.companies) }}K+
          </div>
          <div class="text-lg text-gray-600 font-medium">
            Companies Trusting us
          </div>
        </div>

        <!-- Wall Art Design -->
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-persian-green-600 mb-2">
            {{ formatNumber(animatedStats.wallArt) }}K
          </div>
          <div class="text-lg text-gray-600 font-medium">
            Wall Art Design
          </div>
        </div>

        <!-- Overall Rating -->
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-persian-green-600 mb-2">
            {{ animatedStats.rating }}
          </div>
          <div class="text-lg text-gray-600 font-medium">
            Overall Rating
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
  data() {
    return {
      // Target values
      targetStats: {
        experience: 8,
        companies: 10,
        wallArt: 20,
        rating: 5
      },
      // Animated values that will count up
      animatedStats: {
        experience: 0,
        companies: 0,
        wallArt: 0,
        rating: 0
      },
      // Animation state
      hasAnimated: false,
      observer: null
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.startAnimation()
              this.hasAnimated = true
            }
          })
        },
        {
          threshold: 0.3 // Trigger when 30% of the element is visible
        }
      )

      if (this.$refs.statsSection) {
        this.observer.observe(this.$refs.statsSection)
      }
    },
    
    startAnimation() {
      // Animate each stat with different durations for variety
      this.animateValue('experience', this.targetStats.experience, 2000)
      this.animateValue('companies', this.targetStats.companies, 2500)
      this.animateValue('wallArt', this.targetStats.wallArt, 2200)
      this.animateValue('rating', this.targetStats.rating, 1800)
    },

    animateValue(key, target, duration) {
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easedProgress = this.easeOutCubic(progress)
        
        this.animatedStats[key] = Math.round(startValue + (target - startValue) * easedProgress)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    },

    easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3)
    },

    formatNumber(num) {
      return num.toString()
    }
  }
}
</script>