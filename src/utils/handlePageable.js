// default size is 10
export function pageable(data, page, size, sort) {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  let content = data.slice(offset, offset + limit);

  const pageables = {
    pageable: {
      sort: {
        empty: sort ? false : true,
        sorted: sort ? true : false,
        unsorted: sort ? false : true,
      },
      offset: offset,
      pageSize: page ? +page : 0,
      pageNumber: page ? +page : 0,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalElements: data.length,
    totalPages: Math.ceil(data.length / limit),
    size: limit,
    number: page ? +page : 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: data.length,
    first: true,
    empty: false,
    image: {
      url: process.env.BACKEND_URL + "images/",
      options: ["webp/", "gif/"]
    },
  };

  return { content, pageables };
}
