function scrollTo<T extends HTMLElement>(target: T, time: number): void {
  setTimeout(() => target.scrollIntoView(), time);
}
export { scrollTo };
