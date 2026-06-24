import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import briefListImg from './assets/d8aa711f-c617-47f4-bdbd-258044f48485.png';
import briefDetailImg from './assets/b3313b9d-b29a-42e6-aa96-c1e1d350a36b.png';
import notifImg1 from './assets/b73930e9-9092-4b5f-9e72-ddb9c430cb7e.png';
import notifImg2 from './assets/48f43045-6cd2-4d4d-aca6-41e886e7c86c.png';
import notifAfterImg from './assets/45570361-3ec4-4faa-989a-558334cba254.png';

export const design: DesignSystem = {
  palette: {
    bg: '#FFFFFF',
    text: '#0F172A',
    accent: '#3874ff',
  },
  fonts: {
    display: '-apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: {
    hero: 180,
    body: 38,
  },
  radius: 12,
};

const muted = '#64748B';
const surface = '#F8FAFC';
const border = '#E2E8F0';
const red = '#EF4444';
const green = '#10B981';

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

const PageNum = ({ light = false }: { light?: boolean }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 52,
        right: 120,
        fontSize: 22,
        color: light ? 'rgba(255,255,255,0.4)' : muted,
        letterSpacing: '0.08em',
        fontFeatureSettings: '"tnum"',
      }}
    >
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
};

// ── 01 · Cover ───────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
    }}
  >
    <div
      style={{
        width: 56,
        height: 6,
        background: 'var(--osd-accent)',
        borderRadius: 3,
        marginBottom: 52,
      }}
    />
    <div
      style={{
        fontSize: 24,
        fontWeight: 600,
        color: muted,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 24,
      }}
    >
      Release Notes
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.05,
        letterSpacing: '-0.03em',
      }}
    >
      MaroPilot
    </h1>
    <div
      style={{
        fontSize: 80,
        fontWeight: 800,
        color: 'var(--osd-accent)',
        marginTop: 16,
        letterSpacing: '-0.01em',
      }}
    >
      v1.0.0
    </div>
    <p style={{ fontSize: 32, color: muted, marginTop: 52, lineHeight: 1 }}>
      June 2026
    </p>
    <PageNum />
  </div>
);

// ── 02 · Agenda ──────────────────────────────────────────────────────────────
const Agenda: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--osd-accent)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 56,
      }}
    >
      Agenda
    </div>
    {[
      { num: '01', label: '新功能與優化' },
      { num: '02', label: '全新通知機制' },
      { num: '03', label: 'Demo' },
    ].map(({ num, label }) => (
      <div
        key={num}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 36,
          marginBottom: 36,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--osd-accent)',
            minWidth: 36,
            letterSpacing: '0.05em',
          }}
        >
          {num}
        </span>
        <span style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.3 }}>{label}</span>
      </div>
    ))}
    <PageNum />
  </div>
);

// ── 03 · Section — 新功能與優化 ──────────────────────────────────────────────
const SectionFeatures: Page = () => (
  <div
    style={{ ...fill, background: 'var(--osd-accent)', color: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px', position: 'relative', backgroundColor: '#0F172A' }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.55)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 36,
      }}
    >
      01
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      新功能
      {''}
      與優化
    </h2>
    <PageNum light />
  </div>
);

// ── 04 · Brief 列表 ──────────────────────────────────────────────────────────
const BriefList: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '80px 120px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      gap: 80,
      alignItems: 'center',
    }}
  >
    {/* Left — text */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 640, flexShrink: 0 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--osd-accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        Brief 列表
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 60,
          fontWeight: 800,
          margin: '0 0 52px',
          lineHeight: 1.2,
        }}
      >
        更聰明的列表視圖
      </h2>
      {[
        { title: '狀態數量標籤', desc: '一眼掌握應開未開、應關未關的數量' },
        { title: '廣告帳戶篩選', desc: '快速聚焦特定帳戶的 Brief 資料' },
      ].map(({ title, desc }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'flex-start',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--osd-accent)',
              marginTop: 16,
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.3 }}>{title}</div>
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.5, marginTop: 6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Right — screenshots */}
    <div style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center', height: 860, justifyContent: 'center' }}>
      <div style={{ height: '100%', overflow: 'hidden', borderRadius: 12, border: `1px solid ${border}` }}>
        <img
          src={briefListImg}
          alt="Brief 列表截圖"
          style={{ height: '133%', width: 'auto', display: 'block', objectPosition: 'top' }}
        />
      </div>
    </div>
    <PageNum />
  </div>
);

// ── 05 · Brief 詳細資訊 ──────────────────────────────────────────────────────
const BriefDetail: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '80px 120px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      gap: 80,
      alignItems: 'center',
    }}
  >
    {/* Left — text */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 640, flexShrink: 0 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--osd-accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        Brief 詳細資訊
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 60,
          fontWeight: 800,
          margin: '0 0 52px',
          lineHeight: 1.2,
        }}
      >
        展開卡片，快速行動
      </h2>
      {[
        { title: '複製 Campaign 名稱', desc: '一鍵複製，無需手動選取' },
        { title: '直接前往進稿表', desc: '從詳情頁立即跳轉，減少操作步驟' },
      ].map(({ title, desc }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'flex-start',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--osd-accent)',
              marginTop: 16,
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.3 }}>{title}</div>
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.5, marginTop: 6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Right — screenshot */}
    <div style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center', height: 860, justifyContent: 'center' }}>
      <div style={{ height: '100%', overflow: 'hidden', borderRadius: 12, border: `1px solid ${border}` }}>
        <img
          src={briefDetailImg}
          alt="Brief 詳細資訊截圖"
          style={{ height: '133%', width: 'auto', display: 'block', objectPosition: 'top' }}
        />
      </div>
    </div>
    <PageNum />
  </div>
);

// ── 06 · 通知重設計 ───────────────────────────────────────────────────────────
const NotificationRedesign: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '80px 120px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      gap: 80,
      alignItems: 'center',
    }}
  >
    {/* Left — text */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 640, flexShrink: 0 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--osd-accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        通知
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 60,
          fontWeight: 800,
          margin: '0 0 52px',
          lineHeight: 1.2,
        }}
      >
        重新設計的通知體驗
      </h2>
      {[
        { title: '48 小時時間窗', desc: '通知列表僅顯示最近 48 小時的記錄' },
        { title: '展開查看詳情', desc: '點擊通知可查看當時 Brief 狀態，並直接前往進稿表' },
      ].map(({ title, desc }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'flex-start',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--osd-accent)',
              marginTop: 16,
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.3 }}>{title}</div>
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.5, marginTop: 6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Right — screenshots */}
    <div style={{ display: 'flex', flexDirection: 'row', gap: 20, alignSelf: 'center', height: 860, justifyContent: 'center' }}>
      <div style={{ height: '100%', width: 'auto', flexShrink: 0, overflow: 'hidden', borderRadius: 12, border: `1px solid ${border}` }}>
        <img
          src={notifImg1}
          alt="通知截圖 1"
          style={{ height: '133%', width: 'auto', display: 'block', objectPosition: 'top' }}
        />
      </div>
      <div style={{ height: '100%', width: 'auto', flexShrink: 0, overflow: 'hidden', borderRadius: 12, border: `1px solid ${border}` }}>
        <img
          src={notifImg2}
          alt="通知截圖 2"
          style={{ height: '133%', width: 'auto', display: 'block', objectPosition: 'top' }}
        />
      </div>
    </div>
    <PageNum />
  </div>
);

// ── 07 · Section — 全新通知機制 ──────────────────────────────────────────────
const SectionNotification: Page = () => (
  <div
    style={{
      ...fill,
      background: '#0F172A',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 36,
      }}
    >
      02
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      全新
      <br />
      通知機制
    </h2>
    <PageNum light />
  </div>
);

// ── 08 · 目前機制 ───────────────────────────────────────────────────────────
const NotificationCurrentMechanism: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '0 160px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--osd-accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 32,
      }}
    >
      通知機制
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 900,
        margin: '0 0 64px',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
      }}
    >
      目前機制
    </h2>
    {[
      '目前通知機制採用 一個 Spreadsheet 對應一則通知訊息 的方式。',
      '當使用者訂閱的 Spreadsheet 數量增加時，通知數量也會同步增加，容易在同一時間產生大量通知，影響使用體驗。',
    ].map((t) => (
      <div key={t} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 44 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: red,
            marginTop: 18,
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 38, lineHeight: 1.6, color: 'var(--osd-text)' }}>{t}</span>
      </div>
    ))}
    <PageNum />
  </div>
);

// ── 09 · 彙總式通知機制 ──────────────────────────────────────────────────────
const NotificationMechanism: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '80px 120px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--osd-accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}
    >
      新機制
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 56,
        fontWeight: 800,
        margin: '0 0 40px',
        lineHeight: 1.2,
      }}
    >
      彙總式通知機制
    </h2>
    <div style={{ display: 'flex', gap: 60, flex: 1, minHeight: 0 }}>
      {/* Left — description */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {[
          '為降低通知數量並提升通知效率，後續將調整為彙總式通知機制。',
          '將所有已訂閱 Spreadsheet 的異常通知整合為單一通知訊息，避免同時間收到大量重複通知。',
          '整合後通知的嚴重等級（Severity），將以當次所有異常 Spreadsheet 中的最高嚴重等級作為通知等級。',
        ].map((t) => (
          <div key={t} style={{ display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--osd-accent)', marginTop: 14, flexShrink: 0 }} />
            <span style={{ fontSize: 28, lineHeight: 1.6, color: 'var(--osd-text)' }}>{t}</span>
          </div>
        ))}
        <div style={{ marginTop: 8, marginLeft: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { icon: '🚨', title: '緊急！', desc: '重大錯誤請立即處理' },
            { icon: '⚠️', title: '警告', desc: '請確認設定是否正確' },
            { icon: '✅', title: '通知', desc: '太好了 目前監控正常' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--osd-text)' }}>{title}</span>
              <span style={{ fontSize: 22, color: muted }}>— {desc}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right — 通知訊息將包含 + flow */}
      <div style={{ width: 720, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            通知訊息將包含
          </div>
          {['本次異常通知的摘要資訊。', '通知詳情頁連結。'].map((t) => (
            <div key={t} style={{ display: 'flex', gap: 16, marginBottom: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: muted, marginTop: 13, flexShrink: 0 }} />
              <span style={{ fontSize: 26, color: muted, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 24, borderRadius: 12, overflow: 'hidden', border: `1px solid ${border}` }}>
            <img src={notifAfterImg} alt="通知截圖" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            通知查看流程
          </div>
          {[
            '使用者點擊通知中的連結。',
            '進入通知詳情頁，查看所有異常項目。',
            '點擊特定錯誤項目。',
            '系統導向對應的 Spreadsheet。',
            '使用者可直接定位並處理問題。',
          ].map((t, i) => (
            <div key={t} style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--osd-accent)', minWidth: 24, marginTop: 4, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ fontSize: 24, lineHeight: 1.5, color: 'var(--osd-text)' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <PageNum />
  </div>
);

// ── 09 · 即將發布 ─────────────────────────────────────────────────────────────
const ComingSoon: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 120,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--osd-accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 24,
      }}
    >
      即將發布
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 800,
        margin: '0 0 72px',
        lineHeight: 1.2,
      }}
    >即將發佈的更新</h2>
    <div style={{ display: 'flex', gap: 40 }}>
      {[
        { title: '桌機版本', desc: 'MaroPilot Desktop App', points: [] },
        { title: '多格式 Spreadsheet', desc: '支援 3 種試算表格式', points: ['基於行', '基於行且多區塊', '基於列'] },
      ].map(({ title, desc, points }) => (
        <div
          key={title}
          style={{
            flex: 1,
            background: surface,
            borderRadius: 16,
            padding: '52px 48px',
            border: `1.5px solid ${border}`,
          }}
        >
          <div
            style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: muted, lineHeight: 1.5 }}>{desc}</div>
          {points.length > 0 && (
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {points.map((p) => (
                <div key={p} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--osd-accent)', flexShrink: 0 }} />
                  <span style={{ fontSize: 28, color: muted, lineHeight: 1.4 }}>{p}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <PageNum />
  </div>
);

// ── 10 · Demo ───────────────────────────────────────────────────────────────
const Demo: Page = () => (
  <div
    style={{
      ...fill,
      background: '#0F172A',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 36,
      }}
    >
      03
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      Demo
    </h2>
    <PageNum light />
  </div>
);

export const meta: SlideMeta = {
  title: 'MaroPilot v1.0.0',
  createdAt: '2026-06-24T03:01:40.493Z',
};

export default [
  Cover,
  Agenda,
  SectionFeatures,
  BriefList,
  BriefDetail,
  NotificationRedesign,
  ComingSoon,
  SectionNotification,
  NotificationCurrentMechanism,
  NotificationMechanism,
  Demo,
] satisfies Page[];
