import { motion } from 'framer-motion'

// const tabs = ['Home', 'Search', 'About', 'FAQ']

const Tabs = ({
  tabs = [],
  selectedTab,
  setSelectedTab,
  tabsClassName = '',
  tabClassName = '',
}) => {
  // const [selected, setSelected] = useState(tabs[0])

  return (
    <div className={`flex items-center flex-wrap gap-2 ${tabsClassName}`}>
      {tabs.map((tab) => (
        <Chip
          tab={tab}
          selected={selectedTab === tab}
          Tab
          setSelected={setSelectedTab}
          key={tab}
        />
      ))}
    </div>
  )
}

const Chip = ({ tab, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(tab)}
      className={`${
        selected
          ? 'text-white'
          : 'text-slate-600 hover:text-slate-700 hover:border-slate-200 border border-transparent'
      } text-sm transition-colors px-2 py-2 relative`}
    >
      <span className='relative z-10'>{tab}</span>
      {selected && (
        <motion.span
          layoutId='pill-tab'
          transition={{ type: 'spring', duration: 0.5 }}
          className='absolute inset-0 z-0 bg-gradient-to-r from-brandPrimaryDark to-brandPrimary/75'
        ></motion.span>
      )}
    </button>
  )
}

export default Tabs
