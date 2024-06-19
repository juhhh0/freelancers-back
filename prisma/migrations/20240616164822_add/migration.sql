-- AlterTable
ALTER TABLE "Freelancer" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "picture" TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/150?img=68',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Freelancer';

-- AlterTable
ALTER TABLE "Recruiter" ADD COLUMN     "picture" TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/150?img=68';
