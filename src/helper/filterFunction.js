import { getStatus } from "./luftmessstationen";

const itemFilterFunction = ({ filterState }) => {
  return (item) => {
    return filterState?.stations?.includes(getStatus(item));
  };
};
export default itemFilterFunction;
