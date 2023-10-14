import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';


export function cleanHTML(html) {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);
  return purify.sanitize(html);
}
