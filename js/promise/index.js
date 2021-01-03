const STATUS = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
}

class MyPromise {
  constructor (callback) {
    this.status = STATUS.PENDING
    this.value = undefined

    this.resolveQueue = []
    this.rejectQueue = []

    let called

    const resolve = value => {
      if (called) {
        return
      }

      called = true

      if (this.status === STATUS.PENDING) {
        this.value = value
        this.status = STATUS.FULFILLED
        this.resolveQueue.forEach(fn => fn(value))
      }
    }

    const reject = reason => {
      if (called) {
        return
      }

      called = true

      if (this.status === STATUS.PENDING) {
        this.value = reason
        this.status = STATUS.REJECTED
        this.rejectQueue.forEach(fn => fn(reason))
      }
    }

    try {
      callback(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then (onResolved, onRejected) {
    if (this.status === STATUS.PENDING) {
      this.resolveQueue.push(onResolved)
      this.rejectQueue.push(onRejected)
    } else if (this.status === STATUS.FULFILLED) {
      // 保证then是异步
      setTimeout(() => {
        try {
          onResolved(this.value)
        } catch (error) {
          onRejected(error)
        }
      })
    } else if (this.status === STATUS.REJECTED) {
      setTimeout(() => {
        try {
          onRejected(this.reason)
        } catch (error) {
          onRejected(error)
        }
      })
    }
  }
}
