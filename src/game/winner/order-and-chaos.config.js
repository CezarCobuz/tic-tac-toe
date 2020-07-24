/**
 * @param lastPositionPlayed,
 * @returns config for all directions for checker
 * */
export const getCheckerConfig = (lastPositionPlayed) => {
  const { x, y } = lastPositionPlayed

  let config = [
    // On row
    {
      start: {
        row: x,
        col: 0,
      },
      stop: {
        row: x,
        col: 5,
      },
      advance: {
        row: 0, // const
        col: 1, // y++
      },
      condition: (parserX, parserY) => parserY < 5,
    },

    // On column TODO:
    {
      start: {
        row: 0,
        col: y,
      },
      stop: {
        row: 5,
        col: y,
      },
      advance: {
        row: 1, // const
        col: 0, // y++
      },
      condition: (parserX, parserY) => parserX < 5,
    },
  ]

  return config
}
