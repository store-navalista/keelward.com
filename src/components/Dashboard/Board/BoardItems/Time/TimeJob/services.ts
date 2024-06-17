export default class Services {
   type: number
   colors = ['#29abe2', '#9dd251', '#eb5757']

   constructor(type: number) {
      this.type = type
   }

   getColors() {
      return this.colors
   }

   getStyle() {
      switch (this.type) {
         case -0.5: // day of
            return {
               '--borderColor': this.colors[0],
               '--bg-icon': 'url(/assets/images/svg/timereport-days-dayof.svg)'
            }
         case -1: //sick day
            return {
               '--borderColor': this.colors[1],
               '--bg-icon': 'url(/assets/images/svg/timereport-days-sick.svg)'
            }
         case -1.5: //vacation
            return {
               '--borderColor': this.colors[2],
               '--bg-icon': 'url(/assets/images/svg/timereport-days-vac.svg)'
            }
         default: //default
            return {
               '--borderColor': '#fff'
            }
      }
   }
}
