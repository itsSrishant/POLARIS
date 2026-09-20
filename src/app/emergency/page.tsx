'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
export default function Emergency() {
  return (
    <DashboardLayout role="emergency">
      <div><h1 className="text-3xl font-bold text-critical">Emergency Response</h1><p className="text-mist">Incident alerts and emergency coordination.</p></div>
    </DashboardLayout>
  );
}
