import { mkdir, readdir, rm, copyFile, access } from 'node:fs/promises'
import path from 'node:path'

const sourceDir = 'C:\\Users\\Demmy\\Desktop\\Kumpulan sertifikat'
const targetDir = path.join(process.cwd(), 'public', 'certificates')
const heroPhotoSource = 'C:\\Users\\Demmy\\Downloads\\1771074058353 (2).png'
const heroPhotoTarget = path.join(process.cwd(), 'public', 'profile-photo.png')
const logoSourceDir = 'C:\\Users\\Demmy\\Downloads\\logo'
const logoTargetDir = path.join(process.cwd(), 'public', 'logos')

async function syncCertificates() {
  try {
    await access(sourceDir)
  } catch {
    console.warn(`Certificate source folder not found: ${sourceDir}. Skipping sync.`)
    return
  }

  await mkdir(targetDir, { recursive: true })

  const existingTargetItems = await readdir(targetDir, { withFileTypes: true })
  await Promise.all(
    existingTargetItems.map((item) =>
      rm(path.join(targetDir, item.name), { recursive: true, force: true }),
    ),
  )

  const sourceItems = await readdir(sourceDir, { withFileTypes: true })
  const sourceFiles = sourceItems.filter((item) => item.isFile())

  await Promise.all(
    sourceFiles.map((file) =>
      copyFile(path.join(sourceDir, file.name), path.join(targetDir, file.name)),
    ),
  )

  console.log(`Synced ${sourceFiles.length} certificate files to ${targetDir}`)
}

async function syncHeroPhoto() {
  try {
    await access(heroPhotoSource)
  } catch {
    console.warn(`Hero photo not found: ${heroPhotoSource}. Skipping photo sync.`)
    return
  }

  await mkdir(path.dirname(heroPhotoTarget), { recursive: true })
  await copyFile(heroPhotoSource, heroPhotoTarget)
  console.log(`Synced hero photo to ${heroPhotoTarget}`)
}

async function syncBrandLogos() {
  try {
    await access(logoSourceDir)
  } catch {
    console.warn(`Logo source folder not found: ${logoSourceDir}. Skipping logo sync.`)
    return
  }

  await mkdir(logoTargetDir, { recursive: true })

  const existingLogoItems = await readdir(logoTargetDir, { withFileTypes: true })
  await Promise.all(
    existingLogoItems.map((item) =>
      rm(path.join(logoTargetDir, item.name), { recursive: true, force: true }),
    ),
  )

  const logoItems = await readdir(logoSourceDir, { withFileTypes: true })
  const svgFiles = logoItems.filter((item) => item.isFile() && item.name.toLowerCase().endsWith('.svg'))

  await Promise.all(
    svgFiles.map((file) =>
      copyFile(path.join(logoSourceDir, file.name), path.join(logoTargetDir, file.name)),
    ),
  )

  console.log(`Synced ${svgFiles.length} logo files to ${logoTargetDir}`)
}

Promise.all([syncCertificates(), syncHeroPhoto(), syncBrandLogos()]).catch((error) => {
  console.error('Failed to sync assets:', error)
  process.exit(1)
})
