// export const splitByPattern = (text: string) => {
//    const words = text.split(' ')

//    const parts = [
//       words.slice(0, 2).join(' '),
//       words.slice(2, 6).join(' '),
//       words.slice(6, 10).join(' '),
//       words.slice(10).join(' ')
//    ].filter(Boolean)

//    return parts.map((item, index) => (index === parts.length - 1 ? item : `${item} `))
// }
export const splitByPattern =
   (pattern: number[]) =>
   (text: string): string[] => {
      const words = text.split(' ')
      let cursor = 0

      const parts = pattern.map((count) => {
         const chunk = words.slice(cursor, cursor + count).join(' ')
         cursor += count
         return chunk
      })

      const rest = words.slice(cursor).join(' ')
      if (rest) parts.push(rest)

      return parts.map((item, index) => (index === parts.length - 1 ? item : `${item} `))
   }
