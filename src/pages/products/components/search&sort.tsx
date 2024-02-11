import Input from "@/components/Input";
import { setSearchValue, setSort } from "@/redux/slices/search.slice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

const SearchAndSort = () => {
  const { register } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const debounce = useDebouncedCallback((val) => {
    dispatch(setSearchValue(val));
  }, 800);

  const sortChangeHandler = (val: string) => {
    const opt = {
      sortParam: "",
      sortMode: "",
    };
    switch (val) {
      case "asc":
        opt.sortMode = "asc";
        opt.sortParam = "price";
        break;
      case "desc":
        opt.sortMode = "desc";
        opt.sortParam = "price";
        break;
      case "":
        opt.sortMode = "";
        opt.sortParam = "";
        break;
    }
    dispatch(setSort(opt));
  };

  return (
    <form className="flex justify-between border-b border-t px-10 py-8 ">
      <div>
        <Input
          className="w-full rounded-xl border-2  px-4 py-1 md:w-72 lg:w-96"
          placeholder="Search..."
          {...register("search", {
            onChange: (e) => debounce(e.target.value),
          })}
        />
      </div>
      <div>
        <select
          id=""
          className="rounded-md border-2 py-1 sm:px-4"
          {...(register("sort"),
          { onChange: (e) => sortChangeHandler(e.target.value) })}
        >
          <option value="">Sort</option>
          <option value="desc">Highest Price</option>
          <option value="asc">Lowest Price</option>
        </select>
      </div>
    </form>
  );
};

export default SearchAndSort;
