import { Search } from "lucide-react";
import Form from "next/form";

export default function SearchBar() {
  return (
    <Form action="/search" className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        name="q"
        placeholder="Search..."
        className="pl-10 pr-16 py-2 w-full lg:w-64 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 px-3 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </Form>
  );
}
