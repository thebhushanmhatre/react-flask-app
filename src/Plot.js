import React from 'react';

function Plot() {

  return (
  <>
    <h1>Take a Input equation and Plot Graph below of the same</h1>
    <form action="api/plot" method="post">
      <label for="equation">Equation:</label>
      <input type="text" id="equation" name="equation" />
    </form>
  </>
  )
}

export default Plot;