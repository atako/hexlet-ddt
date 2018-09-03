import { map, toString } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
export default (tags) => {
  const mapping = {
    a: tag => getAttribute("href", tag),
    img: tag => getAttribute("src", tag),
    link: tag => getAttribute("href", tag)
  }
  const links = map(tag => mapping[getName(tag)](tag), tags);
  return links;
}
// END
