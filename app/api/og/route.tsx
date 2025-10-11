import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Fractional CTO + Automation';
const TAGLINE = 'On-demand CTO leadership + hands-on AI automations';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            backgroundImage: 'linear-gradient(to bottom right, #f1f5f9, #e2e8f0)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              maxWidth: '900px',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#1e293b',
                textAlign: 'center',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              {BRAND_NAME}
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#475569',
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              {TAGLINE}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '40px',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
              />
              <span
                style={{
                  fontSize: '24px',
                  color: '#64748b',
                }}
              >
                Perth, WA
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
