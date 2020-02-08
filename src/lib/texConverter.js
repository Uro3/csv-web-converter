const defaultOptions = {
  hline: false,
  rule: false,
}

const convert = (itemRows, options=defaultOptions) => {
  if (!Array.isArray(itemRows)) {
    return '';
  }

  const hline = options.hline ? ' \\hline' : '';

  let content = '';
  itemRows.forEach((items) => {
    if (!Array.isArray(items)) {
      return;
    }
    content += `${items.join(' & ')} \\\\${hline}\n`;
  });

  let head = "\\begin{table}[]\n\\begin{tabular}{==rule==}";

  const columnsNum = itemRows[0].length;
  const rule = options.rule && columnsNum > 0
    ? Array(columnsNum + 1).fill('|').join('c')
    : '';
  head = head.replace('==rule==', rule);
  head += hline + '\n';

  const foot = "\\end{tabular}\n\\end{table}";

  return head + content + foot;
};

export {
  convert
};
