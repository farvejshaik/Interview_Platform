import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../components/ui/Navbar";
import { PROBLEMS } from "../data/problems";
import { PROBLEM_COMPANIES } from "../data/problems-meta";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  Code2Icon,
  SearchIcon,
  XIcon,
  FilterIcon,
  ChevronDownIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function collectCategories(problems) {
  const set = new Set();
  for (const p of problems) set.add(p.category);
  return Array.from(set).sort();
}

function collectCompanies() {
  const set = new Set();
  for (const id of Object.keys(PROBLEM_COMPANIES)) {
    for (const c of PROBLEM_COMPANIES[id]) set.add(c);
  }
  return Array.from(set).sort();
}

const FILTER_ICON_COLOR = "text-base-content/30";

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-base-content/5 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2 cursor-pointer"
      >
        {title}
        <ChevronDownIcon className={`size-3 transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && <div className="flex flex-wrap gap-1.5">{children}</div>}
    </div>
  );
}

function ProblemsPage() {
  const problems = useMemo(() => Object.values(PROBLEMS), []);
  const categories = useMemo(() => collectCategories(problems), [problems]);
  const allCompanies = useMemo(() => collectCompanies(), []);

  const [search, setSearch] = useState("");
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const PROBLEMS_PER_PAGE = 10;

  const toggleDifficulty = (d) => {
    setSelectedDifficulties((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };
  const toggleCategory = (c) => {
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };
  const toggleCompany = (c) => {
    setSelectedCompanies((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const clearAll = () => {
    setSearch("");
    setSelectedDifficulties([]);
    setSelectedCategories([]);
    setSelectedCompanies([]);
  };

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.category.toLowerCase().includes(q) &&
          !p.id.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedDifficulties.length && !selectedDifficulties.includes(p.difficulty))
        return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category))
        return false;
      if (selectedCompanies.length) {
        const comps = PROBLEM_COMPANIES[p.id] || [];
        if (!selectedCompanies.some((sc) => comps.includes(sc)))
          return false;
      }
      return true;
    });
  }, [problems, search, selectedDifficulties, selectedCategories, selectedCompanies]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROBLEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (page - 1) * PROBLEMS_PER_PAGE;
    return filtered.slice(start, start + PROBLEMS_PER_PAGE);
  }, [filtered, page]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [search, selectedDifficulties, selectedCategories, selectedCompanies]);

  const hasActiveFilters =
    search || selectedDifficulties.length || selectedCategories.length || selectedCompanies.length;

  const activeCount =
    selectedDifficulties.length + selectedCategories.length + selectedCompanies.length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        <div className="flex gap-8 flex-col lg:flex-row">
          {/* ===== SIDEBAR FILTERS ===== */}
          <aside className="lg:w-64 shrink-0 lg:self-start lg:sticky lg:top-24">
            {/* Mobile toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 mb-4 text-sm font-medium text-base-content/70 hover:text-base-content transition-colors cursor-pointer"
            >
              <FilterIcon className="size-4" />
              Filters
              {activeCount > 0 && (
                <span className="badge badge-sm badge-primary">{activeCount}</span>
              )}
              <ChevronDownIcon className={`size-3 transition-transform ml-1 ${mobileFiltersOpen ? "" : "-rotate-90"}`} />
            </button>

            {/* Search (sidebar) */}
            <div className={`space-y-5 ${mobileFiltersOpen ? "block" : "hidden"} lg:block`}>
              <div className="relative">
                <SearchIcon className={`absolute left-3 top-1/2 -translate-y-1/2 size-3.5 ${FILTER_ICON_COLOR}`} />
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input input-bordered w-full pl-9 pr-8 text-sm bg-base-100 border-base-300/50 h-10"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content cursor-pointer"
                  >
                    <XIcon className="size-3.5" />
                  </button>
                )}
              </div>

              <FilterSection title="Difficulty">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDifficulty(d)}
                    className={`badge badge-sm cursor-pointer transition-all rounded-md ${
                      selectedDifficulties.includes(d)
                        ? getDifficultyBadgeClass(d)
                        : "badge-ghost text-base-content/50 hover:text-base-content/80"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </FilterSection>

              <FilterSection title="Category">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className={`badge badge-sm cursor-pointer transition-all rounded-md ${
                      selectedCategories.includes(c)
                        ? "badge-primary"
                        : "badge-ghost text-base-content/50 hover:text-base-content/80"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </FilterSection>

              <FilterSection title="Company">
                {allCompanies.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCompany(c)}
                    className={`badge badge-sm cursor-pointer transition-all rounded-md ${
                      selectedCompanies.includes(c)
                        ? "badge-accent"
                        : "badge-ghost text-base-content/50 hover:text-base-content/80"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </FilterSection>

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="text-xs text-base-content/40 hover:text-base-content/70 transition-colors cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* ===== PROBLEM LIST ===== */}
          <div className="flex-1 min-w-0">
            {/* Active filter tags + result count */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2 bg-base-100/30 p-3 rounded-xl border border-base-300/20">
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedDifficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDifficulty(d)}
                    className={`badge badge-sm gap-1 cursor-pointer rounded-md ${getDifficultyBadgeClass(d)}`}
                  >
                    {d} <XIcon className="size-2.5" />
                  </button>
                ))}
                {selectedCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className="badge badge-sm badge-primary gap-1 cursor-pointer rounded-md"
                  >
                    {c} <XIcon className="size-2.5" />
                  </button>
                ))}
                {selectedCompanies.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCompany(c)}
                    className="badge badge-sm badge-accent gap-1 cursor-pointer rounded-md"
                  >
                    {c} <XIcon className="size-2.5" />
                  </button>
                ))}
              </div>
              <span className="text-xs text-base-content/40 whitespace-nowrap">
                {filtered.length} / {problems.length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {paginated.map((problem) => {
                const companies = PROBLEM_COMPANIES[problem.id] || [];
                return (
                  <Link
                    key={problem.id}
                    to={`/problem/${problem.id}`}
                    className="card bg-base-100 border border-base-300/50 shadow-sm hover:shadow-md hover:border-base-300 hover:scale-[1.01] transition-all rounded-2xl"
                  >
                    <div className="card-body py-4 px-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1.5">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Code2Icon className="size-5 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-lg font-bold truncate">{problem.title}</h2>
                                <span className={`badge badge-sm rounded-md ${getDifficultyBadgeClass(problem.difficulty)}`}>
                                  {problem.difficulty}
                                </span>
                              </div>
                              <p className="text-xs text-base-content/50 mt-0.5">{problem.category}</p>
                            </div>
                          </div>
                          <p className="text-sm text-base-content/70 line-clamp-2 mb-2">{problem.description.text}</p>
                          {companies.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {companies.map((comp) => (
                                <span
                                  key={comp}
                                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-gradient-to-r from-primary/20 to-secondary/20 text-base-content/70"
                                >
                                  {comp}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-primary shrink-0">
                          <span className="text-sm font-medium hidden sm:inline">Solve</span>
                          <ChevronRightIcon className="size-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {filtered.length === 0 && (
                <div className="text-center py-20 text-base-content/40 bg-base-100/30 rounded-2xl border border-base-300/20">
                  <p className="text-lg">No problems match</p>
                  <button onClick={clearAll} className="mt-2 text-sm text-primary hover:underline cursor-pointer">
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && filtered.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8 pb-4 bg-base-100/30 p-3 rounded-xl border border-base-300/20">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="btn btn-ghost btn-sm btn-square disabled:opacity-30"
                >
                  <ChevronLeftIcon className="size-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`btn btn-sm min-w-[36px] ${
                      p === page ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="btn btn-ghost btn-sm btn-square disabled:opacity-30"
                >
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;
