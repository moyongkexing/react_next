const h1 = {
  fontSize:'72pt',
  fontWeight:'bold',
  textAlign:'right',
  letterSpacing:'-8px',
  color:'#f0f0f0',
  margin:'-40px 0px'
}


const p = {
  margin:'0px',
  color:'#666',
  fontSize:'16pt'
}


export default () =><div>
  <style jsx>{`
    h1 {
      font-size: 68px;
      font-weight: bold;
      text-align: right;
      letter-spacing: -8px;
      color: #f0f0f0;
      margin: -32px 0px;
    }
    p {
      margin:0px;
      color:#666;
      font-size:16pt;
    }
  `}</style>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>Welcome to next.js!</p>
  <p>これはビルトインCSSによるスタイルです。</p>
</div>

