/**
 * @param lastPositionPlayed,
 * @returns config for all directions for checker
 * */
export const getCheckerConfig = (lastPositionPlayed) => {
  const { x, y } = lastPositionPlayed
  // TODO: Refactor without stop if it is not used in condition
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

    // On column
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

    // ==========================================
    // Diagonals - main: top left to bottom right
    // ==========================================
    // main
    {
      start: {
        row: 0,
        col: 0,
      },
      stop: {
        row: 5,
        col: 5,
      },
      advance: {
        row: 1,
        col: 1,
      },
      condition: (parserX, parserY) => parserX < 5 && parserY < 5,
    },

    // 0, 1 start, stop: 4,5
    {
      start: {
        row: 0,
        col: 1,
      },
      stop: {
        row: 4,
        col: 5,
      },
      advance: {
        row: 1,
        col: 1,
      },
      //   condition: (parserX, parserY) => parserX < dimension - 2 && parserY < dimension - 1,
      condition: (parserX, parserY) => parserX < 4 && parserY < 5,
    },

    // 1, 0 start, stop: 5,4
    {
      start: {
        row: 1,
        col: 0,
      },
      stop: {
        row: 5,
        col: 4,
      },
      advance: {
        row: 1,
        col: 1,
      },
      //  parserX < dimension - 1 && parserY < dimension - 2;
      condition: (parserX, parserY) => parserX < 5 && parserY < 4,
    },

    // ==========================================
    // Diagonals - anti: top right to bottom left
    // ==========================================
    // 0, 5 start, stop: 5,0
    {
      start: {
        row: 0,
        col: 5,
      },
      stop: {
        row: 5,
        col: 0,
      },
      advance: {
        row: 1,
        col: -1,
      },
      //  parserX < dimension - 1 && parserY < dimension - 2;
      condition: (parserX, parserY) => parserX < 5 && parserY > 0,
    },

    // 0, 4 start, stop: 4,0
    {
      start: {
        row: 0,
        col: 4,
      },
      stop: {
        row: 4,
        col: 0,
      },
      advance: {
        row: 1,
        col: -1,
      },
      //  parserX < dimension - 1 && parserY < dimension - 2;
      condition: (parserX, parserY) => parserX < 4 && parserY > 0,
    },

    // 1, 5 start, stop: 5,1
    {
      start: {
        row: 1,
        col: 5,
      },
      stop: {
        row: 5,
        col: 1,
      },
      advance: {
        row: 1,
        col: -1,
      },
      //  parserX < dimension - 1 && parserY < dimension - 2;
      condition: (parserX, parserY) => parserX < 5 && parserY > 1,
    },
  ]

  return config
}
