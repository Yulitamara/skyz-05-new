function resizeTable(table, selector = "thead tr th", minWidth = 5) {
  if (!table) return;
  const cols = table.querySelectorAll(selector);
  const parent = table.parentNode;
  const tableWidth = table.offsetWidth;
  let value = 0;

  parent.dataset.tableParent = "";
  parent.style.setProperty(`--th`, `${table.offsetHeight}px`);

  cols.forEach((col, index) => {
    const colWidth = parseInt(100 / (tableWidth / col.offsetWidth));
    col.style.width = `calc(1% * var(--c${index}))`;
    table.style.setProperty(`--c${index}`, colWidth);

    if (index > 0) {
      const input = document.createElement("input");
      input.dataset.tableCol = index;
      input.setAttribute("aria-hidden", true);
      input.type = "range";
      input.value = value;
      parent.appendChild(input);

      input.addEventListener("input", () => {
        if (input.value < minWidth) input.value = minWidth;
        if (input.value > 100 - minWidth) input.value = 100 - minWidth;

        const next = input.nextElementSibling;
        const prev = input.previousElementSibling;

        if (
          next?.nodeName === "INPUT" &&
          input.valueAsNumber > next.valueAsNumber - minWidth
        ) {
          input.value = next.valueAsNumber - minWidth;
          return;
        }
        if (
          prev?.nodeName === "INPUT" &&
          input.valueAsNumber < prev.valueAsNumber + minWidth
        ) {
          input.value = prev.valueAsNumber + minWidth;
          return;
        }

        table.style.setProperty(
          `--c${index - 1}`,
          prev?.nodeName === "INPUT"
            ? input.valueAsNumber - prev.valueAsNumber
            : input.valueAsNumber
        );
        table.style.setProperty(
          `--c${index}`,
          next?.nodeName === "INPUT"
            ? next.valueAsNumber - input.valueAsNumber
            : 100 - input.valueAsNumber
        );
      });
    }
    value += colWidth;
  });

  /* HACK TO INIT FIREFOX: Trigger input event on last range to re-position sliders */
  const lastRange = table.parentNode.lastChild;
  if (lastRange?.nodeName === "INPUT") {
    lastRange.dispatchEvent(
      new Event("input", {
        bubbles: true,
        cancelable: true,
      })
    );
  }
}
/* Init Demo */
const table = document.querySelector("table");
resizeTable(table);
