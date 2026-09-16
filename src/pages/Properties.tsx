import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/Reveal';
import { properties } from '@/data/properties';

const propertyTypes = ['All', 'Villa', 'Penthouse', 'Modern House', 'Apartment', 'Estate', 'Townhouse'];
const cities = ['All', 'Beverly Hills', 'New York', 'Malibu', 'Aspen', 'Miami', 'Greenwich', 'Chicago', 'Hamptons', 'Scottsdale', 'Boston', 'Lake Tahoe'];
const priceRanges = ['All', 'Under $3M', '$3M – $7M', '$7M – $12M', '$12M+'];

export default function Properties() {
  const [type, setType] = useState('All');
  const [city, setCity] = useState('All');
  const [price, setPrice] = useState('All');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== 'All' && p.type !== type) return false;
      if (city !== 'All' && p.city !== city) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (price !== 'All') {
        const num = parseFloat(p.price.replace(/[^0-9.]/g, ''));
        if (price === 'Under $3M' && num >= 3) return false;
        if (price === '$3M – $7M' && (num < 3 || num >= 7)) return false;
        if (price === '$7M – $12M' && (num < 7 || num >= 12)) return false;
        if (price === '$12M+' && num < 12) return false;
      }
      return true;
    });
  }, [type, city, price, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const resetFilters = () => {
    setType('All'); setCity('All'); setPrice('All'); setSearch(''); setCurrentPage(1);
  };

  return (
    <>
      <PageHero
        title="Our Properties"
        subtitle="Explore our curated collection of extraordinary homes, each selected for its architectural significance and timeless appeal."
        image="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / Properties"
      />

      <section className="section-pad bg-cream">
        <div className="container-luxury">
          {/* Search & Filter Bar */}
          <div className="bg-white p-6 md:p-8 mb-12 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-custom" />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:border-gold outline-none transition-colors text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all text-sm uppercase tracking-wider"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-100">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-custom mb-2">Property Type</label>
                  <select
                    value={type}
                    onChange={(e) => { setType(e.target.value); setCurrentPage(1); }}
                    className="w-full p-3 border border-gray-200 focus:border-gold outline-none text-sm bg-white"
                  >
                    {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-custom mb-2">Location</label>
                  <select
                    value={city}
                    onChange={(e) => { setCity(e.target.value); setCurrentPage(1); }}
                    className="w-full p-3 border border-gray-200 focus:border-gold outline-none text-sm bg-white"
                  >
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-custom mb-2">Price Range</label>
                  <select
                    value={price}
                    onChange={(e) => { setPrice(e.target.value); setCurrentPage(1); }}
                    className="w-full p-3 border border-gray-200 focus:border-gold outline-none text-sm bg-white"
                  >
                    {priceRanges.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-stone-custom text-sm">
              Showing <span className="text-charcoal font-medium">{paginated.length}</span> of {filtered.length} properties
            </p>
            {(type !== 'All' || city !== 'All' || price !== 'All' || search) && (
              <button onClick={resetFilters} className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors">
                <X size={16} /> Clear filters
              </button>
            )}
          </div>

          {/* Property grid */}
          {paginated.length > 0 ? (
            <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </Reveal>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-3xl text-charcoal mb-4">No properties found</p>
              <p className="text-stone-custom mb-6">Try adjusting your filters to see more results.</p>
              <button onClick={resetFilters} className="btn-outline-dark">
                <span>Clear All Filters</span>
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-200 text-sm hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 text-sm transition-all ${
                    currentPage === i + 1
                      ? 'bg-charcoal text-white'
                      : 'border border-gray-200 hover:border-gold'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-200 text-sm hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
