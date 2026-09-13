import { plans } from '../data/mockData';
import { Plus, Edit, Trash2, CreditCard, Check } from 'lucide-react';

export default function PlansPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت پلن‌ها</h1>
          <p className="text-sm text-slate-400 mt-1">تعریف و مدیریت پلن‌های اشتراک</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          پلن جدید
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-slate-800/50 border rounded-xl p-6 transition-all hover:border-slate-600/50 ${plan.status === 'ACTIVE' ? 'border-slate-700/50' : 'border-slate-700/30 opacity-60'}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400">{plan.duration} روز</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                plan.status === 'ACTIVE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-slate-500/10 border-slate-500/20 text-slate-400'
              }`}>
                {plan.status === 'ACTIVE' ? 'فعال' : 'غیرفعال'}
              </span>
            </div>

            {/* Price */}
            <div className="mb-4 p-3 bg-slate-900/50 rounded-lg text-center">
              <p className="text-2xl font-bold text-white">{plan.price === 0 ? 'رایگان' : `${(plan.price / 1000).toFixed(0)} هزار`}</p>
              <p className="text-[10px] text-slate-500">{plan.price === 0 ? '' : 'تومان'}</p>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-4">
              <FeatureItem label="حجم ترافیک" value={`${plan.trafficLimit} GB`} />
              <FeatureItem label="تعداد دستگاه" value={`${plan.maxDevices} دستگاه`} />
              <FeatureItem label="اتصال همزمان" value={`${plan.maxConnections} اتصال`} />
              <FeatureItem label="سرعت" value={plan.speed} />
            </div>

            {/* Protocols */}
            <div className="mb-4">
              <p className="text-[10px] text-slate-500 mb-2">پروتکل‌های مجاز</p>
              <div className="flex flex-wrap gap-1">
                {plan.allowedProtocols.map((p) => (
                  <span key={p} className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[10px] text-cyan-400">{p}</span>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="mb-4">
              <p className="text-[10px] text-slate-500 mb-2">کشورهای مجاز</p>
              <div className="flex flex-wrap gap-1">
                {plan.allowedCountries.map((c) => (
                  <span key={c} className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[10px] text-violet-400">{c}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
              <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-700 hover:text-blue-400 transition-colors">
                <Edit className="w-3.5 h-3.5" /> ویرایش
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-700 hover:text-red-400 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
      <span className="text-xs text-slate-400">{label}:</span>
      <span className="text-xs text-slate-200 font-medium mr-auto">{value}</span>
    </div>
  );
}
