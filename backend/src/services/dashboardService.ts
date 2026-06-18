import prisma from "../lib/prisma";

export async function getDashboardMetrics() {
  const files = await prisma.file.count();
  const threats = await prisma.threatLog.count();
  const activities = await prisma.activityLog.count();
  const notifications = await prisma.notification.count();

  return {
    files,
    threats,
    activities,
    notifications
  };
}