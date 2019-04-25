import React from 'react'
import PropTypes from 'prop-types'
import styles from './screenShot.less'

import html2canvas from 'html2canvas'

import html2canvas0 from './html2canvas0.4.1'

import $ from 'jquery'


class ScreenShot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optsStyle: {
        visibility: 'hidden',
        top: 0,
        left: 0,
      },
      bgStyle: {
        visibility: 'hidden',
      },
    }
    this.mouseDowning = false
    this.mouseDownState = {}
    this.clearRectPoint = null // 存储拖动位置信息
    this.imgInfoList = []
  }


  /*
  * 清空画板->回到待截图状态
  * */
  clearRect = (n) => {
    this.bgCanvas = this.refs.bgCanvas
    let canvasRect = this.bgCanvas.getBoundingClientRect()
    let ctx = this.bgCanvas.getContext('2d')
    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height)
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.fillRect(0, 0, canvasRect.width, canvasRect.height)
  }

  /*
  * 继续截图
  * */
  html2canvasContinue = () => {
    this.setState({
        optsStyle: {
          visibility: 'hidden',
        },
      }, () => {
        this.html2canvasOpt()
      },
    )
  }

  /*
  * 截图完毕
  *   先隐藏操作按钮
  *   在隐藏页面
  *   回调
  * */
  html2canvasDone = () => {
    this.setState({
        optsStyle: {
          visibility: 'hidden',
        },
      }, () => {
        this.html2canvasOpt().then(() => {
          this.props.onDone && this.props.onDone(this.imgInfoList)
          this.setState({
            bgStyle: {
              visibility: 'hidden',
            },
          })
        })
      },
    )
  }

  /*
  * 执行截屏操作
  * */
  html2canvasOpt = () => {

    // 0.4.1版本截屏的结果
    // html2canvas0(document.querySelector('body'), {
    //   onrendered: (canvas) => {
    //     let h = document.documentElement.scrollHeight
    //     let w = document.documentElement.scrollWidth
    //     let dh = document.documentElement.clientHeight
    //     let sy = document.documentElement.scrollTop
    //
    //     let canvasTemp = document.createElement('canvas')
    //     canvasTemp.setAttribute('width', w + 'px')
    //     canvasTemp.setAttribute('height', dh + 'px')
    //
    //     let ctx = canvasTemp.getContext('2d')
    //     ctx.drawImage(canvas, 0, sy, w, dh, 0, 0, w, dh)
    //     let img = canvasTemp.toDataURL()
    //     $(document).scrollTop(sy)
    //     this.imgInfoList.push(img)
    //     this.imgInfoList.push(canvas.toDataURL())
    //   },
    // })

    return html2canvas(document.body).then((canvas) => {
      // $(this.refs.outer).before(`<img style="width: 100px" class="feedback-begin" src="${canvas.toDataURL()}" />`)
      this.imgInfoList.push(canvas.toDataURL())
      this.clearRect()
      return canvas.toDataURL()
    })
  }

  /*
  * 取消此次截图
  * */
  cancel = (n) => {
    this.setState({
      bgStyle: {
        visibility: 'hidden',
      },
      optsStyle: {
        visibility: 'hidden',
      },
    })
  }

  /*
  * 开始截图
  *   清空画板并显示
  * */
  begin = (n) => {
    this.clearRect()
    this.setState({
      bgStyle: {
        visibility: '',
      },
    })
  }


  componentDidMount() {

    /*
    * 修复背景错位问题,将背景移动至body层
    *   jquery实现: $(this.refs.bgFixed).appendTo('body')
    * */
    let bodyNode = document.getElementsByTagName('body')[0]
    bodyNode.insertBefore(this.refs.bgFixed, bodyNode.childNodes[0])

    this.bgCanvas = this.refs.bgCanvas
    let canvasClientRect = this.bgCanvas.getBoundingClientRect()
    let ctx = this.bgCanvas.getContext('2d')

    this.bgCanvas.addEventListener('mousemove', (e) => {
      if (this.mouseDowning) {
        ctx.clearRect(0, 0, canvasClientRect.width, canvasClientRect.height)
        ctx.fillStyle = 'rgba(255,255,255,0.5)'
        ctx.fillRect(0, 0, canvasClientRect.width, canvasClientRect.height)
        ctx.clearRect(this.mouseDownState.clientX, this.mouseDownState.clientY, e.clientX - this.mouseDownState.clientX, e.clientY - this.mouseDownState.clientY)
        this.clearRectPoint = [
          [this.mouseDownState.clientX, e.clientX],
          [this.mouseDownState.clientY, e.clientY],
        ]
      }
    })
    this.bgCanvas.addEventListener('mousedown', (e) => {
      ctx.clearRect(0, 0, canvasClientRect.width, canvasClientRect.height)
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      ctx.fillRect(0, 0, canvasClientRect.width, canvasClientRect.height)
      this.mouseDowning = true
      this.mouseDownState = {
        clientX: e.clientX,
        clientY: e.clientY,
      }
      this.setState({
        optsStyle: {
          visibility: 'hidden',
        },
      })
    })
    this.bgCanvas.addEventListener('mouseup', (e) => {
      this.mouseDowning = false

      if (this.clearRectPoint) {
        // 截图操作方向不同,则需要考虑起始结束点的位置坐标值大小
        let clearRectPointDeal = this.clearRectPoint.map((n) => {
          return Math.max(...n)
        })
        this.setState({
          optsStyle: {
            visibility: '',
            left: clearRectPointDeal[0] - this.refs.opts.getBoundingClientRect().width,
            top: clearRectPointDeal[1],
          },
        })
        this.clearRectPoint = null // 重置位置信息
      } else {// 未进行截图拖动鼠标操作 则截屏全部
        this.setState({
          optsStyle: {
            visibility: '',
            left: this.bgCanvas.getBoundingClientRect().width / 2,
            top: this.bgCanvas.getBoundingClientRect().height / 2,
          },
        })
      }

      // html2canvas($('body'), {
      //   onrendered (canvas) {
      //     let h = $(document).height()
      //     let w = $(document).width()
      //     let dh = $(window).height()
      //     let sy = $(document).scrollTop()
      //
      //     let _canvas = $(`<canvas id="feedback-canvas-tmp" width="${w}" height="${dh}"/>`).hide().appendTo('body')
      //     let _ctx = _canvas.get(0).getContext('2d')
      //     _ctx.drawImage(canvas, 0, sy, w, dh, 0, 0, w, dh)
      //     let img = _canvas.get(0).toDataURL()
      //     $(document).scrollTop(sy)
      //
      //     let post = {}
      //     post.img = img
      //     $('#bgFixed').before(`<img class="feedback-begin" src="${img}" />`)
      //
      //     function getFormData (imgDataUrl) {
      //       imgDataUrl = imgDataUrl.split(',')[1]
      //       imgDataUrl = window.atob(imgDataUrl)
      //       let ia = new Uint8Array(imgDataUrl.length)
      //       for (let i = 0; i < imgDataUrl.length; i++) {
      //         ia[i] = imgDataUrl.charCodeAt(i)
      //       }
      //       let blob = new Blob([ia], { type: 'image/png', endings: 'transparent' })
      //       let formDataFile = new FormData()
      //       formDataFile.append('file', blob, 'feedbackimage.png')
      //       return formDataFile
      //     }
      //
      //     let formData = getFormData(post.img)
      //     axios.post(`url`, formData, {
      //       headers: { 'Content-Type': 'multipart/form-data' },
      //     })
      //   },
      // })

      // html2canvas(document.body).then((canvas) => {
      //   $(this.refs.outer).before(`<img class="feedback-begin" src="${canvas.toDataURL()}" />`)
      // })

    })

  }


  render() {
    let bodyClientRect = document.querySelector('body').getBoundingClientRect()
    return (<div className={styles.screenShotOuter} ref={'outer'}>
      <div className={styles.btn} onClick={this.begin}>截屏</div>
      <div className={styles.bgFixed} style={this.state.bgStyle} ref={'bgFixed'}>
        <canvas
          title={'点击并拖动鼠标进行截图操作'}
          ref={'bgCanvas'}
          width={`${bodyClientRect.width}px`}
          height={`${bodyClientRect.height}px`}>
        </canvas>
        <div className={styles.opts} style={this.state.optsStyle} ref={'opts'}>
          <span className={styles.confirm} onClick={this.html2canvasContinue}>继续截图</span>
          <span className={styles.confirm} onClick={this.html2canvasDone}>完成</span>
          <span className={styles.cancel} onClick={this.cancel}>取消</span>
        </div>
      </div>
    </div>)
  }
}

ScreenShot.propTypes = {
  dispatch: PropTypes.func,
}

export default ScreenShot
