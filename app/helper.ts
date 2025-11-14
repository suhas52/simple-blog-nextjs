import { cookies } from 'next/headers';

export async function getCookies() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')
    if (!token) return null
    return token.value
}