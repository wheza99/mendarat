import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { domain } = await request.json();

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.rolly.app/rest/v1/rpc/get_business_data_by_domain', {
      method: 'POST',
      headers: {
        'Apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bXhpYnNpZ2txaXB5ZW12ZGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMzc5MTQsImV4cCI6MjA1NDgxMzkxNH0.OoDVSqzpQMgBJBWnyNMBYpB8bc27yvWxTi6JLMJ46fI',
        'Content-Type': 'application/json',
        'Cookie': '__cf_bm=DX5YbFpLvTW67e4HhnRrihX_xNzgP6aOpQodIVmODk4-1751335159-1.0.1.1-B4FB1qBszKBxk5bpJgdM9VhL35kDS0JXfKhgyuzJO6U.9GVbp2hmhMf0FE4bq3nwWNx0qf_7pGg6Cx9R.gOHngGGrC8a1xLrUTU6iBWTHWE'
      },
      body: JSON.stringify({
        p_domain: domain
      })
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching business data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch business data' },
      { status: 500 }
    );
  }
} 