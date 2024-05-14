const SideBar = () => {
  return (
    <div className="flex">
  <div className="bg-purple-700 text-white w-64 h-screen">
    <div className="p-4">
      <div className="flex items-center mb-6">
        <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24">
          {/* Icon SVG path goes here */}
        </svg>
        <span className="font-semibold text-lg">Dashboard</span>
      </div>
      <nav className="space-y-2">
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            {/* Icon SVG path goes here */}
          </svg>
          <span>Team</span>
          <span className="ml-auto bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">5</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            {/* Icon SVG path goes here */}
          </svg>
          <span>Projects</span>
          <span className="ml-auto bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">12</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            {/* Icon SVG path goes here */}
          </svg>
          <span>Calendar</span>
          <span className="ml-auto bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">20+</span>
        </a>
        {/* Add more links as needed */}
      </nav>
    </div>
    <div className="mt-auto p-4">
      <div className="text-sm font-semibold mb-2">Your teams</div>
      <div className="space-y-1">
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <span className="mr-2 uppercase">H</span>
          <span>Heroicons</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <span className="mr-2 uppercase">T</span>
          <span>Tailwind Labs</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          <span className="mr-2 uppercase">W</span>
          <span>Workcation</span>
        </a>
      </div>
    </div>
  </div>
  {/* Main content area goes here */}
</div>

  )
}
export default SideBar