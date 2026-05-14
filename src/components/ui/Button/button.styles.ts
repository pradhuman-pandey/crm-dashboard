export const buttonVariants:any = {
  base: `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    font-medium
    transition-all
    duration-300
    whitespace-nowrap
  `,

  variant: {
    primary: `
      bg-black
      text-white
      hover:bg-neutral-800
    `,

    secondary: `
      bg-gray-100
      text-black
      hover:bg-gray-200
    `,

    outline: `
      border
      border-gray-300
      bg-white
      text-black
      hover:bg-gray-100
    `,

    ghost: `
      bg-transparent
      text-black
      hover:bg-gray-100
    `,
  },

  size: {
    sm: `
      px-1
      py-1
      text-sm
    `,

    md: `
      px-1
      py-1
      text-sm
    `,
  },
};