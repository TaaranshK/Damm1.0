interface TabBarProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function TabBar({ tabs, activeTab, onChange }: TabBarProps) {
  return (
    <div className="flex gap-0 mt-8 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 ${
            activeTab === tab
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
