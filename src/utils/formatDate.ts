function handleFormatDate() {
  const FormaterDate = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "medium",
  });

  return (date: string | Date) => {
    if(typeof date === "string") {
      return FormaterDate.format(new Date(date));
    }

    return FormaterDate.format(date);
  }
}

export default handleFormatDate;