import { readerArticles, readerContentPost } from "../libs/readerPosts.js";
import {
  addElementDate,
  sortByElement,
  filterByLanguage,
} from "../utils/handleSorter.js";
import { pageable } from "../utils/handlePageable.js";
import handleError from "../utils/handleError.js";

export async function getPosts(req, res) {
  const { sort, language, page, size } = req.query;
  const articles = await readerArticles();
  let data = [...articles];
  data = addElementDate(data);
  data = sortByElement(sort, data);
  data = filterByLanguage(language, data);
  const { content, pageables } = pageable(data, page, size, sort);
  res.send({ content, ...pageables });
}

export async function getContentPost(req, res) {
  const { id } = req.params;
  if (!id) return handleError(res, "ERROR_GET_POST", 400);
  const content = await readerContentPost(id);
  if (!content) return handleError(res, "POST_NOT_EXIST", 400);
  //res.header("Content-Type", "text/html; charset=utf-8").send(content);
  res.send({ content });
}
