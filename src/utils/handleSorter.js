export function addElementDate(data) {
  data.forEach((e) => {
    e.date = e.createdAt.split("\r")[0];
    let date = e.date.split("-");
    let day = date[0];
    let month = date[1];
    let year = date[2];
    let dateUnix = new Date(year, month, day).getTime();
    e.date = dateUnix;
  });
  return data;
}


export function filterByLanguage(language, data) {
  const availableLanguages = ["es", "en"];
  if (!availableLanguages.includes(language)) return data;
  if (language === "es") {
    data = data.filter((e) => e.language === "es\r");
  }
  if (language === "en") {
    data = data.filter((e) => e.language === "en\r");
  }
  return data;
}

export function sortByElement(sort, data) {
  const availableSorts = [
    "date",
    "date,desc",
    "id,desc",
    "id",
    "id,desc",
    "title",
    "title,desc",
    "category",
    "category,desc",
    "author",
    "author,desc",
  ];
  // default sort by id
  data = data.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
  });

  if (!availableSorts.includes(sort)) return data;
  if (sort === "date,desc") {
    data = data.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
    });
  }
  if (sort === "date") {
    data = data.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
    });
  }
  if (sort === "id,desc") {
    data = data.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
    });
  }
  if (sort === "id") {
    data = data.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
    });
  }
  if (sort === "title,desc") {
    data = data.sort((a, b) => {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
    });
  }
  if (sort === "title") {
    data = data.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    });
  }
  return data;
}
