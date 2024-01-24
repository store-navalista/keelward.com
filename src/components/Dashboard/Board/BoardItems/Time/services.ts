class TimeService {
   formattedI18n: string

   constructor(i18n: string) {
      this.formattedI18n = i18n === 'en' ? 'en-US' : 'ru-RU'
   }

   getDaysOfMonth(currentDate: Date): { day: number; day_of?: boolean; formatDay: string }[] {
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
      const daysOfMonth = Array.from({ length: lastDayOfMonth }, (_, index) => {
         const day = index + 1
         const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
         const dayOfWeek = date.getDay()
         const day_of = dayOfWeek === 0 || dayOfWeek === 6

         const options = { weekday: 'long' } as Intl.DateTimeFormatOptions
         const formatDay = ((date: Date) => new Intl.DateTimeFormat(this.formattedI18n, options).format(date))(date)

         return day_of ? { day, day_of, formatDay } : { day, formatDay }
      })

      return daysOfMonth
   }

   getPreviousMonth(prevDate: Date): Date {
      const newDate = new Date(prevDate)
      newDate.setMonth(prevDate.getMonth() - 1)
      return newDate
   }

   getNextMonth(prevDate: Date): Date {
      const newDate = new Date(prevDate)
      newDate.setMonth(prevDate.getMonth() + 1)
      return newDate
   }

   formatDateToMonthYear(date: Date): string {
      const options = { month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions
      return new Intl.DateTimeFormat(this.formattedI18n, options).format(date)
   }
}

export default TimeService
